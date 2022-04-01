import {
  DEFAULT_TIMEOUT,
  LOOPRING_EXPORTED_ACCOUNT,
  LoopringAPI,
  web3,
  signatureKeyPairMock,
  TOKEN_INFO,
} from "../../data";
import * as sdk from "../../../index";

/*
 * @replace LOOPRING_EXPORTED_ACCOUNT.exchangeAddress =  exchangeInfo.exchangeAddress
 * const { exchangeInfo } = await LoopringAPI.exchangeAPI.getExchangeInfo();
 */
describe("AccountDemo", function () {
  beforeEach(() => {
    LoopringAPI.InitApi(sdk.ChainId.GOERLI);
  });
  it(
    "getAccount",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getAccount({
        owner: LOOPRING_EXPORTED_ACCOUNT.address,
      });
      console.log(response);
    },
    DEFAULT_TIMEOUT
  );

  it("getWalletType", async () => {
    const [
      { walletType: CFWalletType },
      { walletType: EOAWalletType },
      { walletType: ContractWalletType },
    ] = await Promise.all([
      LoopringAPI.walletAPI.getWalletType({
        wallet: LOOPRING_EXPORTED_ACCOUNT.addressCF,
      }),
      LoopringAPI.walletAPI.getWalletType({
        wallet: LOOPRING_EXPORTED_ACCOUNT.address,
      }),
      LoopringAPI.walletAPI.getWalletType({
        wallet: LOOPRING_EXPORTED_ACCOUNT.addressContractWallet,
      }),
    ]);
    console.log(
      "CFWalletType, EOAWalletType, ContractWalletType",
      CFWalletType,
      EOAWalletType,
      ContractWalletType
    );
  });

  it(
    "getUserApiKey",
    async () => {
      const { accInfo } = await LoopringAPI.exchangeAPI.getAccount({
        owner: LOOPRING_EXPORTED_ACCOUNT.address,
      });
      const eddsakey = await sdk.generateKeyPair({
        web3,
        address: accInfo.owner,
        keySeed: sdk.GlobalAPI.KEY_MESSAGE.replace(
          "${exchangeAddress}",
          LOOPRING_EXPORTED_ACCOUNT.exchangeAddress
        ).replace("${nonce}", (accInfo.nonce - 1).toString()),
        walletType: sdk.ConnectorNames.Unknown,
        chainId: sdk.ChainId.GOERLI,
      });
      console.log("eddsakey:", eddsakey.sk);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getEthNonce",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getEthNonce({
        owner: LOOPRING_EXPORTED_ACCOUNT.address,
      });
      console.log("getEthNonce:", response);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "Layer1_ETH_Balance",
    async () => {
      const { ethBalance } = await LoopringAPI.exchangeAPI.getEthBalances({
        owner: LOOPRING_EXPORTED_ACCOUNT.address,
      });
      console.log(`Layer1 ethBalance: ${ethBalance}`);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "Layer1_ERC20_Balance",
    async () => {
      const { tokenBalances } = await LoopringAPI.exchangeAPI.getTokenBalances({
        owner: LOOPRING_EXPORTED_ACCOUNT.address,
        token: [TOKEN_INFO.tokenMap.LRC.address],
      });
      console.log(
        `Layer1 ERC20 Balance LRC: ${tokenBalances.get(
          TOKEN_INFO.tokenMap.LRC.address as unknown as sdk.TokenAddress
        )}`
      );
    },
    DEFAULT_TIMEOUT
  );

  it("Layer1_getNFTBalance", async () => {
    const response = await LoopringAPI.nftAPI.getNFTBalance({
      web3,
      account: LOOPRING_EXPORTED_ACCOUNT.address,
      tokenAddress: LOOPRING_EXPORTED_ACCOUNT.nftTokenAddress,
      nftId: LOOPRING_EXPORTED_ACCOUNT.nftId,
      nftType: sdk.NFTType.ERC1155,
    });
    console.log(response);
  });

  it(
    "Layer2_getUserBalances",
    async () => {
      // step 1. get account info
      const { accInfo } = await LoopringAPI.exchangeAPI.getAccount({
        owner: LOOPRING_EXPORTED_ACCOUNT.address,
      });
      console.log("accInfo:", accInfo);

      // step 2. eddsaKey
      const eddsaKey = await signatureKeyPairMock(accInfo);
      console.log("eddsaKey:", eddsaKey.sk);

      // step 3 get apikey
      const { apiKey } = await LoopringAPI.userAPI.getUserApiKey(
        {
          accountId: accInfo.accountId,
        },
        eddsaKey.sk
      );
      console.log("apiKey:", apiKey);

      // step 4 getUserBalances
      const { userBalances } = await LoopringAPI.userAPI.getUserBalances(
        { accountId: LOOPRING_EXPORTED_ACCOUNT.accountId, tokens: "" },
        apiKey
      );

      console.log(`Layer2 ERC20 Balance: ${userBalances}`);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "Layer2_getUserNFTBalances",
    async () => {
      // step 1. get account info
      const { accInfo } = await LoopringAPI.exchangeAPI.getAccount({
        owner: LOOPRING_EXPORTED_ACCOUNT.address,
      });
      console.log("accInfo:", accInfo);

      // step 2. eddsaKey
      const eddsaKey = await signatureKeyPairMock(accInfo);
      console.log("eddsaKey:", eddsaKey.sk);

      // step 3 get apikey
      const { apiKey } = await LoopringAPI.userAPI.getUserApiKey(
        {
          accountId: accInfo.accountId,
        },
        eddsaKey.sk
      );
      console.log("apiKey:", apiKey);

      // step 4 getUserNFTBalances
      const { userNFTBalances } = await LoopringAPI.userAPI.getUserNFTBalances(
        { accountId: accInfo.accountId, limit: 20 },
        apiKey
      );
      console.log(`Layer2 NFT Balance: ${userNFTBalances}`);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getCounterFactualInfo",
    async () => {
      const response = await LoopringAPI.exchangeAPI.getCounterFactualInfo({
        accountId: LOOPRING_EXPORTED_ACCOUNT.accountIdCF,
      });
      console.log("getCounterFactualInfo", response);
    },
    DEFAULT_TIMEOUT
  );
});
