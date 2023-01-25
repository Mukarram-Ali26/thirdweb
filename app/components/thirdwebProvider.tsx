"use client"

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const activeChainId = ChainId.Mainnet;

function ThirdWebProvider({ children }: {
    children: React.ReactNode
}) {
    return (
        <ThirdwebProvider desiredChainId={activeChainId}>
            {children}
        </ThirdwebProvider>
    )
}

export default ThirdWebProvider