import React, {useState, useEffect} from "react";
import {AppProps} from "next/app";
import "./_app.scss";
import {AccountContext, ContractsContext} from "../providers/contexts";
import {networkName, TOAST_DURATION} from "../utils/constants";
import NFTOptSolContract from "../../artifacts/contracts/NFTOpt.sol/NFTOpt.json";
import addresses from "../../addresses.json";
import Header from "../components/Header";
import toast, {Toaster} from "react-hot-toast";
import RouteGuard from "../components/RouteGuard";
import {NFTOpt} from "../../typechain-types";
import {
    getEthereumObject,
    setupWalletConnectivityEventListeners,
    getSignedContract,
    getCurrentAccount,
    connectWallet,
    getCurrentProvider,
} from "../utils/metamask";

export default function App({Component, pageProps}: AppProps) {
    const [account, setAccount] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [contracts, setContracts] = useState(null);

    const success = async (_account: string, message: string) => {
        let newBlockNo = await getCurrentProvider().getBlockNumber();

        const localStorageExists = localStorage.getItem(`${_account}-blockno-${newBlockNo}-emitted`);
        if (localStorageExists) {
            return;
        }

        toast.success("Successfully " + message);
        localStorage.setItem(`${_account}-blockno-${newBlockNo}-emitted`, "true");
    };

    const attachEventListeners = (contract: NFTOpt, account: string) => {
        contract.on("NewRequest", (from, amount, tx) => {
            success(account, "published a new request");
        });
    };

    useEffect(() => {
        load();
    }, []);

    const load = async () => {
        const ethereum = getEthereumObject();
        if (!ethereum) {
            return;
        }

        await setupWalletConnectivityEventListeners();

        const NFTOptContract = getSignedContract(addresses[networkName].NFTOpt, NFTOptSolContract.abi);
        const contract = NFTOptContract as NFTOpt;

        const currentAccount = getCurrentAccount();

        setContracts({nftOpt: contract});
        setAccount(currentAccount);

        attachEventListeners(contract, currentAccount);

        setLoaded(true);
    };

    return (
        <AccountContext.Provider value={account}>
            <ContractsContext.Provider value={contracts}>
                <RouteGuard account={account} loaded={loaded}>
                    <Toaster toastOptions={{duration: TOAST_DURATION}} containerClassName={"toast-container"} />
                    <Header account={account} onConnectAccount={connectWallet.bind(null, setAccount)} />
                    <Component {...pageProps} />
                </RouteGuard>
            </ContractsContext.Provider>
        </AccountContext.Provider>
    );
}
