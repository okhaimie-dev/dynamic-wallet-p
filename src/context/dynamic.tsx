import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";

import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const DynamicProvider = ({children}: any) => {
  return (
		<DynamicContextProvider
			settings={{
				// Find your environment id at https://app.dynamic.xyz/dashboard/developer
				environmentId: "18f28dba-a643-49d8-a58e-05043e3bb303",
				walletConnectors: [EthereumWalletConnectors],
			}}
		>
			<DynamicWagmiConnector>{children}</DynamicWagmiConnector>
		</DynamicContextProvider>
	);
}

export default DynamicProvider