/** Name of the feature. */
export const BitcoinSignMessage = 'bitcoin:signMessage';

/**
 * `bitcoin:signMessage` is a {@link "@wallet-standard/base".Wallet.features | feature} that may be implemented by a
 * {@link "@wallet-standard/base".Wallet} to allow the app to request to sign a message with the specified
 * {@link "@wallet-standard/base".Wallet.accounts | account}.
 *
 * The wallet will sign a hash of the message prefixed with '\u0018Bitcoin Signed Message:\n' and
 * the byte length of the message.
 *
 * For an example of the prefix + hashing algorithm, see:
 * https://github.com/bitcoinjs/bitcoinjs-message/blob/c43430f4c03c292c719e7801e425d887cbdf7464/index.js#L57
 *
 * @group SignMessage
 */
export type BitcoinSignMessageFeature = {
    /** Name of the feature. */
    readonly [BitcoinSignMessage]: {
        /** Version of the feature implemented by the Wallet. */
        readonly version: BitcoinSignMessageVersion;
        /** Method to call to use the feature. */
        readonly signMessage: BitcoinSignMessageMethod;
    };
};

/**
 * Version of the {@link BitcoinSignMessageFeature} implemented by a {@link "@wallet-standard/base".Wallet}.
 *
 * @group SignMessage
 */
export type BitcoinSignMessageVersion = '1.0.0';

/**
 * Method to call to use the {@link BitcoinSignMessageFeature}.
 *
 * @group SignMessage
 */
export type BitcoinSignMessageMethod = (
    input: BitcoinSignMessageInput
) => Promise<BitcoinSignMessageOutput>;

/**
 * Input for the {@link BitcoinSignMessageMethod}.
 *
 * @group SignMessage
 */
export interface BitcoinSignMessageInput {
    /**
     * The message to sign.
     */
    readonly message: string;
}

/**
 * Output of the {@link BitcoinSignMessageMethod}.
 *
 * @group SignMessage
 */
export interface BitcoinSignMessageOutput {
    /**
     * the signature as raw bytes.
     */
    readonly signature: Uint8Array;
}
