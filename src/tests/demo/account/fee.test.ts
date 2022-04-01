import {
  DEFAULT_TIMEOUT,
  LOOPRING_EXPORTED_ACCOUNT,
  signatureKeyPairMock,
  TOKEN_INFO,
  LoopringAPI,
  web3,
} from "../../data";
import * as sdk from "../../../index";

/*
 * @replace LOOPRING_EXPORTED_ACCOUNT.exchangeAddress = exchangeInfo.exchangeAddress
 * const { exchangeInfo } = await LoopringAPI.exchangeAPI.getExchangeInfo();
 */
describe("FeeDemo", function () {
  beforeEach(() => {});

  it(
    "fee:updateAccount",
    async () => {
      console.log(LoopringAPI.exchangeAPI.getAccount);

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
      return { accInfo, eddsaKey, apiKey };

      const response = await LoopringAPI.userAPI.getOffchainFeeAmt(
        {
          accountId: accInfo.accountId,
          requestType: sdk.OffchainFeeReqType.UPDATE_ACCOUNT,
        },
        apiKey
      );
      console.log("updateAccount:", response);
    },
    DEFAULT_TIMEOUT * 10
  );

  it(
    "fee:transfer",
    async () => {
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
      return { accInfo, eddsaKey, apiKey };
      const response = await LoopringAPI.userAPI.getOffchainFeeAmt(
        {
          accountId: accInfo.accountId,
          requestType: sdk.OffchainFeeReqType.TRANSFER,
        },
        apiKey
      );
      console.log("transfer:", response);
    },
    DEFAULT_TIMEOUT
  );
  it(
    "fee:withdraw",
    async () => {
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
      return { accInfo, eddsaKey, apiKey };
      const response = await LoopringAPI.userAPI.getOffchainFeeAmt(
        {
          accountId: accInfo.accountId,
          requestType: sdk.OffchainFeeReqType.OFFCHAIN_WITHDRAWAL,
        },
        apiKey
      );
      console.log("withdraw:", response);
    },
    DEFAULT_TIMEOUT
  );
  it(
    "fee:fastWithdraw",
    async () => {
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
      return { accInfo, eddsaKey, apiKey };
      const response = await LoopringAPI.userAPI.getOffchainFeeAmt(
        {
          accountId: accInfo.accountId,
          requestType: sdk.OffchainFeeReqType.FAST_OFFCHAIN_WITHDRAWAL,
          tokenSymbol: TOKEN_INFO.tokenMap.LRC.symbol,
        },
        apiKey
      );
      console.log("fastWithdraw:", response);
    },
    DEFAULT_TIMEOUT
  );
  it(
    "fee:order",
    async () => {
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
      return { accInfo, eddsaKey, apiKey };
      const response = await LoopringAPI.userAPI.getOffchainFeeAmt(
        {
          accountId: accInfo.accountId,
          requestType: sdk.OffchainFeeReqType.ORDER,
          tokenSymbol: TOKEN_INFO.tokenMap.LRC.symbol,
        },
        apiKey
      );
      console.log("order:", response);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "fee:amm_exit",
    async () => {
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
      return { accInfo, eddsaKey, apiKey };
      const response = await LoopringAPI.userAPI.getOffchainFeeAmt(
        {
          accountId: accInfo.accountId,
          requestType: sdk.OffchainFeeReqType.AMM_EXIT,
          tokenSymbol: TOKEN_INFO.tokenMap.LRC.symbol,
        },
        apiKey
      );
      console.log("amm_exit:", response);
    },
    DEFAULT_TIMEOUT
  );
  it(
    "fee:amm_join",
    async () => {
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
      return { accInfo, eddsaKey, apiKey };
      const response = await LoopringAPI.userAPI.getOffchainFeeAmt(
        {
          accountId: accInfo.accountId,
          requestType: sdk.OffchainFeeReqType.AMM_JOIN,
          tokenSymbol: TOKEN_INFO.tokenMap.LRC.symbol,
        },
        apiKey
      );
      console.log("amm_join:", response);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "fee:NFTTransfer",
    async () => {
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
      return { accInfo, eddsaKey, apiKey };
      const response = await LoopringAPI.userAPI.getNFTOffchainFeeAmt(
        {
          accountId: accInfo.accountId,
          requestType: sdk.OffchainNFTFeeReqType.NFT_TRANSFER,
        },
        apiKey
      );
      console.log("NFTTransfer:", response);
    },
    DEFAULT_TIMEOUT
  );
  it(
    "fee:NFTWithdrawal",
    async () => {
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
      return { accInfo, eddsaKey, apiKey };
      const response = await LoopringAPI.userAPI.getNFTOffchainFeeAmt(
        {
          accountId: accInfo.accountId,
          requestType: sdk.OffchainNFTFeeReqType.NFT_WITHDRAWAL,
        },
        apiKey
      );
      console.log("NFTWithdrawal:", response);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getActiveFeeInfo without apikey & accountId",
    async () => {
      const response = await LoopringAPI.globalAPI.getActiveFeeInfo({});
      console.log("updateAccount without apikey & accountId:", response);
    },
    DEFAULT_TIMEOUT
  );

  it(
    "getActiveFeeInfo without apikey with accountId",
    async () => {
      const response = await LoopringAPI.globalAPI.getActiveFeeInfo({
        accountId: LOOPRING_EXPORTED_ACCOUNT.accountId,
      });
      console.log("updateAccount without apikey with accountId:", response);
    },
    DEFAULT_TIMEOUT
  );
});
