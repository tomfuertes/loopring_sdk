[@loopring-web/loopring-sdk](../README.md) / [Exports](../modules.md) / LOOPRING\_URLs

# Enumeration: LOOPRING\_URLs

## Table of contents

### Enumeration members

- [ACCOUNT\_ACTION](LOOPRING_URLs.md#account_action)
- [API\_KEY\_ACTION](LOOPRING_URLs.md#api_key_action)
- [COUNTER\_FACTUAL\_INFO](LOOPRING_URLs.md#counter_factual_info)
- [GET\_ACCOUNT\_SERVICES](LOOPRING_URLs.md#get_account_services)
- [GET\_ALLOWANCES](LOOPRING_URLs.md#get_allowances)
- [GET\_AMMPOOL\_GAME\_RANK](LOOPRING_URLs.md#get_ammpool_game_rank)
- [GET\_AMMPOOL\_GAME\_USER\_RANK](LOOPRING_URLs.md#get_ammpool_game_user_rank)
- [GET\_AMMPOOL\_USER\_REWARDS](LOOPRING_URLs.md#get_ammpool_user_rewards)
- [GET\_AMM\_ACTIVITY\_RULES](LOOPRING_URLs.md#get_amm_activity_rules)
- [GET\_AMM\_ASSET\_HISTORY](LOOPRING_URLs.md#get_amm_asset_history)
- [GET\_AMM\_POOLS\_BALANCES](LOOPRING_URLs.md#get_amm_pools_balances)
- [GET\_AMM\_POOLS\_CONF](LOOPRING_URLs.md#get_amm_pools_conf)
- [GET\_AMM\_POOLS\_SNAPSHOT](LOOPRING_URLs.md#get_amm_pools_snapshot)
- [GET\_AMM\_POOL\_STATS](LOOPRING_URLs.md#get_amm_pool_stats)
- [GET\_AMM\_POOL\_TRADE\_TXS](LOOPRING_URLs.md#get_amm_pool_trade_txs)
- [GET\_AMM\_POOL\_TXS](LOOPRING_URLs.md#get_amm_pool_txs)
- [GET\_AVAILABLE\_BROKER](LOOPRING_URLs.md#get_available_broker)
- [GET\_CANDLESTICK](LOOPRING_URLs.md#get_candlestick)
- [GET\_DELEGATE\_GET\_CODE](LOOPRING_URLs.md#get_delegate_get_code)
- [GET\_DEPLOY\_TOKEN\_ADDRESS](LOOPRING_URLs.md#get_deploy_token_address)
- [GET\_DEPTH](LOOPRING_URLs.md#get_depth)
- [GET\_ETH\_BALANCES](LOOPRING_URLs.md#get_eth_balances)
- [GET\_ETH\_NONCE](LOOPRING_URLs.md#get_eth_nonce)
- [GET\_EXCHANGE\_FEEINFO](LOOPRING_URLs.md#get_exchange_feeinfo)
- [GET\_EXCHANGE\_INFO](LOOPRING_URLs.md#get_exchange_info)
- [GET\_FIAT\_PRICE](LOOPRING_URLs.md#get_fiat_price)
- [GET\_GAS\_PRICE](LOOPRING_URLs.md#get_gas_price)
- [GET\_GAS\_PRICE\_RANGE](LOOPRING_URLs.md#get_gas_price_range)
- [GET\_GUARDIAN\_APPROVE\_LIST](LOOPRING_URLs.md#get_guardian_approve_list)
- [GET\_HEBAO\_CONFIG](LOOPRING_URLs.md#get_hebao_config)
- [GET\_IGNORE\_WITHDRAW](LOOPRING_URLs.md#get_ignore_withdraw)
- [GET\_LATEST\_TOKEN\_PRICES](LOOPRING_URLs.md#get_latest_token_prices)
- [GET\_LIQUIDITY\_MINING](LOOPRING_URLs.md#get_liquidity_mining)
- [GET\_LIQUIDITY\_MINING\_USER\_HISTORY](LOOPRING_URLs.md#get_liquidity_mining_user_history)
- [GET\_MARKETS](LOOPRING_URLs.md#get_markets)
- [GET\_MINIMAL\_ORDER\_AMT](LOOPRING_URLs.md#get_minimal_order_amt)
- [GET\_MINIMUM\_TOKEN\_AMT](LOOPRING_URLs.md#get_minimum_token_amt)
- [GET\_MIX\_CANDLESTICK](LOOPRING_URLs.md#get_mix_candlestick)
- [GET\_MIX\_DEPTH](LOOPRING_URLs.md#get_mix_depth)
- [GET\_MIX\_MARKETS](LOOPRING_URLs.md#get_mix_markets)
- [GET\_MIX\_TICKER](LOOPRING_URLs.md#get_mix_ticker)
- [GET\_MULTI\_ORDERS](LOOPRING_URLs.md#get_multi_orders)
- [GET\_NEXT\_STORAGE\_ID](LOOPRING_URLs.md#get_next_storage_id)
- [GET\_NFT\_OFFCHAIN\_FEE\_AMT](LOOPRING_URLs.md#get_nft_offchain_fee_amt)
- [GET\_NFTs\_INFO](LOOPRING_URLs.md#get_nfts_info)
- [GET\_OFFCHAIN\_FEE\_AMT](LOOPRING_URLs.md#get_offchain_fee_amt)
- [GET\_OPERATION\_LOGS](LOOPRING_URLs.md#get_operation_logs)
- [GET\_PROTECTORS](LOOPRING_URLs.md#get_protectors)
- [GET\_PROTOCOL\_PORTRAIT](LOOPRING_URLs.md#get_protocol_portrait)
- [GET\_PWD\_RESET\_TXS](LOOPRING_URLs.md#get_pwd_reset_txs)
- [GET\_RECOMENDED\_MARKETS](LOOPRING_URLs.md#get_recomended_markets)
- [GET\_RELAYER\_CURRENT\_TIME](LOOPRING_URLs.md#get_relayer_current_time)
- [GET\_TICKER](LOOPRING_URLs.md#get_ticker)
- [GET\_TOKENS](LOOPRING_URLs.md#get_tokens)
- [GET\_TOKEN\_BALANCES](LOOPRING_URLs.md#get_token_balances)
- [GET\_TOKEN\_PRICES](LOOPRING_URLs.md#get_token_prices)
- [GET\_TRADES](LOOPRING_URLs.md#get_trades)
- [GET\_USER\_AMM\_POOL\_TXS](LOOPRING_URLs.md#get_user_amm_pool_txs)
- [GET\_USER\_ASSETS](LOOPRING_URLs.md#get_user_assets)
- [GET\_USER\_DEPOSITS\_HISTORY](LOOPRING_URLs.md#get_user_deposits_history)
- [GET\_USER\_EXCHANGE\_BALANCES](LOOPRING_URLs.md#get_user_exchange_balances)
- [GET\_USER\_FEE\_RATE](LOOPRING_URLs.md#get_user_fee_rate)
- [GET\_USER\_NFT\_BALANCES](LOOPRING_URLs.md#get_user_nft_balances)
- [GET\_USER\_NFT\_DEPOSIT\_HISTORY](LOOPRING_URLs.md#get_user_nft_deposit_history)
- [GET\_USER\_NFT\_MINT\_HISTORY](LOOPRING_URLs.md#get_user_nft_mint_history)
- [GET\_USER\_NFT\_TRANSACTION\_HISTORY](LOOPRING_URLs.md#get_user_nft_transaction_history)
- [GET\_USER\_NFT\_TRANSFER\_HISTORY](LOOPRING_URLs.md#get_user_nft_transfer_history)
- [GET\_USER\_NFT\_WITHDRAW\_HISTORY](LOOPRING_URLs.md#get_user_nft_withdraw_history)
- [GET\_USER\_ORDER\_FEE\_RATE](LOOPRING_URLs.md#get_user_order_fee_rate)
- [GET\_USER\_REG\_TXS](LOOPRING_URLs.md#get_user_reg_txs)
- [GET\_USER\_TRADE\_AMOUNT](LOOPRING_URLs.md#get_user_trade_amount)
- [GET\_USER\_TRADE\_HISTORY](LOOPRING_URLs.md#get_user_trade_history)
- [GET\_USER\_TRANSFERS\_LIST](LOOPRING_URLs.md#get_user_transfers_list)
- [GET\_USER\_TXS](LOOPRING_URLs.md#get_user_txs)
- [GET\_USER\_VIP\_ASSETS](LOOPRING_URLs.md#get_user_vip_assets)
- [GET\_USER\_VIP\_INFO](LOOPRING_URLs.md#get_user_vip_info)
- [GET\_WALLET\_TYPE](LOOPRING_URLs.md#get_wallet_type)
- [GET\_WITHDRAWAL\_AGENTS](LOOPRING_URLs.md#get_withdrawal_agents)
- [GET\_WS\_KEY](LOOPRING_URLs.md#get_ws_key)
- [IPFS\_META\_URL](LOOPRING_URLs.md#ipfs_meta_url)
- [OFFICIAL\_LOCK\_OR\_UNLOCK](LOOPRING_URLs.md#official_lock_or_unlock)
- [ORDER\_ACTION](LOOPRING_URLs.md#order_action)
- [ORDER\_CANCEL\_CLIENT\_ORDER\_ID\_LIST](LOOPRING_URLs.md#order_cancel_client_order_id_list)
- [ORDER\_CANCEL\_HASH\_LIST](LOOPRING_URLs.md#order_cancel_hash_list)
- [POST\_EXIT\_AMM\_POOL](LOOPRING_URLs.md#post_exit_amm_pool)
- [POST\_INTERNAL\_TRANSFER](LOOPRING_URLs.md#post_internal_transfer)
- [POST\_JOIN\_AMM\_POOL](LOOPRING_URLs.md#post_join_amm_pool)
- [POST\_NFT\_INTERNAL\_TRANSFER](LOOPRING_URLs.md#post_nft_internal_transfer)
- [POST\_NFT\_MINT](LOOPRING_URLs.md#post_nft_mint)
- [POST\_NFT\_TRADE](LOOPRING_URLs.md#post_nft_trade)
- [POST\_NFT\_VALIDATE\_ORDER](LOOPRING_URLs.md#post_nft_validate_order)
- [POST\_NFT\_WITHDRAWALS](LOOPRING_URLs.md#post_nft_withdrawals)
- [REJECT\_APPROVE\_SIGNATURE](LOOPRING_URLs.md#reject_approve_signature)
- [RESOLVE\_ENS](LOOPRING_URLs.md#resolve_ens)
- [RESOLVE\_NAME](LOOPRING_URLs.md#resolve_name)
- [SEND\_META\_TX](LOOPRING_URLs.md#send_meta_tx)
- [SET\_REFERRER](LOOPRING_URLs.md#set_referrer)
- [SUBMIT\_APPROVE\_SIGNATURE](LOOPRING_URLs.md#submit_approve_signature)
- [WITHDRAWALS\_ACTION](LOOPRING_URLs.md#withdrawals_action)

## Enumeration members

### ACCOUNT\_ACTION

• **ACCOUNT\_ACTION** = `"/api/v3/account"`

#### Defined in

[defs/url_defs.ts:27](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L27)

___

### API\_KEY\_ACTION

• **API\_KEY\_ACTION** = `"/api/v3/apiKey"`

#### Defined in

[defs/url_defs.ts:4](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L4)

___

### COUNTER\_FACTUAL\_INFO

• **COUNTER\_FACTUAL\_INFO** = `"/api/v3/counterFactualInfo"`

#### Defined in

[defs/url_defs.ts:28](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L28)

___

### GET\_ACCOUNT\_SERVICES

• **GET\_ACCOUNT\_SERVICES** = `"/api/v3/spi/getAccountServices"`

#### Defined in

[defs/url_defs.ts:92](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L92)

___

### GET\_ALLOWANCES

• **GET\_ALLOWANCES** = `"/api/v3/eth/allowances"`

#### Defined in

[defs/url_defs.ts:43](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L43)

___

### GET\_AMMPOOL\_GAME\_RANK

• **GET\_AMMPOOL\_GAME\_RANK** = `"/api/v3/game/rank"`

#### Defined in

[defs/url_defs.ts:63](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L63)

___

### GET\_AMMPOOL\_GAME\_USER\_RANK

• **GET\_AMMPOOL\_GAME\_USER\_RANK** = `"/api/v2/game/user/rank"`

#### Defined in

[defs/url_defs.ts:64](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L64)

___

### GET\_AMMPOOL\_USER\_REWARDS

• **GET\_AMMPOOL\_USER\_REWARDS** = `"/api/v3/amm/user/rewards"`

#### Defined in

[defs/url_defs.ts:62](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L62)

___

### GET\_AMM\_ACTIVITY\_RULES

• **GET\_AMM\_ACTIVITY\_RULES** = `"/api/v3/sidecar/activityRules"`

#### Defined in

[defs/url_defs.ts:61](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L61)

___

### GET\_AMM\_ASSET\_HISTORY

• **GET\_AMM\_ASSET\_HISTORY** = `"/api/v3/amm/assets"`

#### Defined in

[defs/url_defs.ts:69](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L69)

___

### GET\_AMM\_POOLS\_BALANCES

• **GET\_AMM\_POOLS\_BALANCES** = `"/api/v3/amm/balances"`

#### Defined in

[defs/url_defs.ts:54](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L54)

___

### GET\_AMM\_POOLS\_CONF

• **GET\_AMM\_POOLS\_CONF** = `"/api/v3/amm/pools"`

#### Defined in

[defs/url_defs.ts:52](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L52)

___

### GET\_AMM\_POOLS\_SNAPSHOT

• **GET\_AMM\_POOLS\_SNAPSHOT** = `"/api/v3/amm/balance"`

#### Defined in

[defs/url_defs.ts:53](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L53)

___

### GET\_AMM\_POOL\_STATS

• **GET\_AMM\_POOL\_STATS** = `"/api/v2/amm/poolsStats"`

#### Defined in

[defs/url_defs.ts:55](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L55)

___

### GET\_AMM\_POOL\_TRADE\_TXS

• **GET\_AMM\_POOL\_TRADE\_TXS** = `"/api/v3/amm/trades"`

#### Defined in

[defs/url_defs.ts:60](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L60)

___

### GET\_AMM\_POOL\_TXS

• **GET\_AMM\_POOL\_TXS** = `"/api/v3/amm/transactions"`

#### Defined in

[defs/url_defs.ts:58](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L58)

___

### GET\_AVAILABLE\_BROKER

• **GET\_AVAILABLE\_BROKER** = `"/api/v3/getAvailableBroker"`

#### Defined in

[defs/url_defs.ts:2](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L2)

___

### GET\_CANDLESTICK

• **GET\_CANDLESTICK** = `"/api/v3/candlestick"`

#### Defined in

[defs/url_defs.ts:22](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L22)

___

### GET\_DELEGATE\_GET\_CODE

• **GET\_DELEGATE\_GET\_CODE** = `"/api/v3/delegator/getCode"`

#### Defined in

[defs/url_defs.ts:66](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L66)

___

### GET\_DEPLOY\_TOKEN\_ADDRESS

• **GET\_DEPLOY\_TOKEN\_ADDRESS** = `"/api/v3/nft/deployTokenAddress"`

#### Defined in

[defs/url_defs.ts:114](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L114)

___

### GET\_DEPTH

• **GET\_DEPTH** = `"/api/v3/depth"`

#### Defined in

[defs/url_defs.ts:18](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L18)

___

### GET\_ETH\_BALANCES

• **GET\_ETH\_BALANCES** = `"/api/v3/eth/balances"`

#### Defined in

[defs/url_defs.ts:45](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L45)

___

### GET\_ETH\_NONCE

• **GET\_ETH\_NONCE** = `"/api/v3/eth/nonce"`

#### Defined in

[defs/url_defs.ts:44](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L44)

___

### GET\_EXCHANGE\_FEEINFO

• **GET\_EXCHANGE\_FEEINFO** = `"/api/v3/exchange/feeInfo"`

#### Defined in

[defs/url_defs.ts:14](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L14)

___

### GET\_EXCHANGE\_INFO

• **GET\_EXCHANGE\_INFO** = `"/api/v3/exchange/info"`

#### Defined in

[defs/url_defs.ts:12](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L12)

___

### GET\_FIAT\_PRICE

• **GET\_FIAT\_PRICE** = `"/api/v3/price"`

#### Defined in

[defs/url_defs.ts:24](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L24)

___

### GET\_GAS\_PRICE

• **GET\_GAS\_PRICE** = `"/api/v3/eth/recommendedGasPrice"`

#### Defined in

[defs/url_defs.ts:47](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L47)

___

### GET\_GAS\_PRICE\_RANGE

• **GET\_GAS\_PRICE\_RANGE** = `"/api/v3/eth/recommendedGasPriceRange"`

#### Defined in

[defs/url_defs.ts:48](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L48)

___

### GET\_GUARDIAN\_APPROVE\_LIST

• **GET\_GUARDIAN\_APPROVE\_LIST** = `"/api/wallet/v3/getGuardianApproveList"`

#### Defined in

[defs/url_defs.ts:79](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L79)

___

### GET\_HEBAO\_CONFIG

• **GET\_HEBAO\_CONFIG** = `"api/wallet/v3/getAppConfigs"`

#### Defined in

[defs/url_defs.ts:82](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L82)

___

### GET\_IGNORE\_WITHDRAW

• **GET\_IGNORE\_WITHDRAW** = `"/api/v3/exchange/notWithdrawContractTokens"`

#### Defined in

[defs/url_defs.ts:15](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L15)

___

### GET\_LATEST\_TOKEN\_PRICES

• **GET\_LATEST\_TOKEN\_PRICES** = `"/api/v3/datacenter/getLatestTokenPrices"`

#### Defined in

[defs/url_defs.ts:78](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L78)

___

### GET\_LIQUIDITY\_MINING

• **GET\_LIQUIDITY\_MINING** = `"/api/v2/sidecar/liquidityMining"`

#### Defined in

[defs/url_defs.ts:65](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L65)

___

### GET\_LIQUIDITY\_MINING\_USER\_HISTORY

• **GET\_LIQUIDITY\_MINING\_USER\_HISTORY** = `"/api/v2/sidecar/liquidityMiningUserHistory"`

#### Defined in

[defs/url_defs.ts:67](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L67)

___

### GET\_MARKETS

• **GET\_MARKETS** = `"/api/v3/exchange/markets"`

#### Defined in

[defs/url_defs.ts:10](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L10)

___

### GET\_MINIMAL\_ORDER\_AMT

• **GET\_MINIMAL\_ORDER\_AMT** = `"/api/v3/user/orderAmount"`

#### Defined in

[defs/url_defs.ts:39](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L39)

___

### GET\_MINIMUM\_TOKEN\_AMT

• **GET\_MINIMUM\_TOKEN\_AMT** = `"/api/v3/user/orderUserRateAmount"`

#### Defined in

[defs/url_defs.ts:40](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L40)

___

### GET\_MIX\_CANDLESTICK

• **GET\_MIX\_CANDLESTICK** = `"/api/v3/mix/candlestick"`

#### Defined in

[defs/url_defs.ts:23](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L23)

___

### GET\_MIX\_DEPTH

• **GET\_MIX\_DEPTH** = `"/api/v3/mix/depth"`

#### Defined in

[defs/url_defs.ts:19](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L19)

___

### GET\_MIX\_MARKETS

• **GET\_MIX\_MARKETS** = `"/api/v3/mix/markets"`

#### Defined in

[defs/url_defs.ts:17](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L17)

___

### GET\_MIX\_TICKER

• **GET\_MIX\_TICKER** = `"/api/v3/mix/ticker"`

#### Defined in

[defs/url_defs.ts:21](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L21)

___

### GET\_MULTI\_ORDERS

• **GET\_MULTI\_ORDERS** = `"/api/v3/orders"`

#### Defined in

[defs/url_defs.ts:9](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L9)

___

### GET\_NEXT\_STORAGE\_ID

• **GET\_NEXT\_STORAGE\_ID** = `"/api/v3/storageId"`

#### Defined in

[defs/url_defs.ts:5](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L5)

___

### GET\_NFT\_OFFCHAIN\_FEE\_AMT

• **GET\_NFT\_OFFCHAIN\_FEE\_AMT** = `"/api/v3/user/nft/offchainFee"`

#### Defined in

[defs/url_defs.ts:102](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L102)

___

### GET\_NFTs\_INFO

• **GET\_NFTs\_INFO** = `"/api/v3/nft/info/nfts"`

#### Defined in

[defs/url_defs.ts:108](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L108)

___

### GET\_OFFCHAIN\_FEE\_AMT

• **GET\_OFFCHAIN\_FEE\_AMT** = `"/api/v3/user/offchainFee"`

#### Defined in

[defs/url_defs.ts:41](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L41)

___

### GET\_OPERATION\_LOGS

• **GET\_OPERATION\_LOGS** = `"/api/wallet/v3/operationLogs"`

#### Defined in

[defs/url_defs.ts:81](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L81)

___

### GET\_PROTECTORS

• **GET\_PROTECTORS** = `"/api/wallet/v3/getProtects"`

#### Defined in

[defs/url_defs.ts:80](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L80)

___

### GET\_PROTOCOL\_PORTRAIT

• **GET\_PROTOCOL\_PORTRAIT** = `"/api/v3/sidecar/ProtocolPortrait"`

#### Defined in

[defs/url_defs.ts:68](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L68)

___

### GET\_PWD\_RESET\_TXS

• **GET\_PWD\_RESET\_TXS** = `"/api/v3/user/updateInfo"`

#### Defined in

[defs/url_defs.ts:30](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L30)

___

### GET\_RECOMENDED\_MARKETS

• **GET\_RECOMENDED\_MARKETS** = `"/api/v3/exchange/recommended"`

#### Defined in

[defs/url_defs.ts:50](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L50)

___

### GET\_RELAYER\_CURRENT\_TIME

• **GET\_RELAYER\_CURRENT\_TIME** = `"/api/v3/timestamp"`

#### Defined in

[defs/url_defs.ts:3](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L3)

___

### GET\_TICKER

• **GET\_TICKER** = `"/api/v3/ticker"`

#### Defined in

[defs/url_defs.ts:20](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L20)

___

### GET\_TOKENS

• **GET\_TOKENS** = `"/api/v3/exchange/tokens"`

#### Defined in

[defs/url_defs.ts:11](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L11)

___

### GET\_TOKEN\_BALANCES

• **GET\_TOKEN\_BALANCES** = `"/api/v3/eth/tokenBalances"`

#### Defined in

[defs/url_defs.ts:46](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L46)

___

### GET\_TOKEN\_PRICES

• **GET\_TOKEN\_PRICES** = `"/api/wallet/v3/tokenPrices"`

#### Defined in

[defs/url_defs.ts:77](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L77)

___

### GET\_TRADES

• **GET\_TRADES** = `"/api/v3/trade"`

#### Defined in

[defs/url_defs.ts:25](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L25)

___

### GET\_USER\_AMM\_POOL\_TXS

• **GET\_USER\_AMM\_POOL\_TXS** = `"/api/v3/amm/user/transactions"`

#### Defined in

[defs/url_defs.ts:59](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L59)

___

### GET\_USER\_ASSETS

• **GET\_USER\_ASSETS** = `"/api/wallet/v3/userAssets"`

#### Defined in

[defs/url_defs.ts:75](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L75)

___

### GET\_USER\_DEPOSITS\_HISTORY

• **GET\_USER\_DEPOSITS\_HISTORY** = `"/api/v3/user/deposits"`

#### Defined in

[defs/url_defs.ts:32](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L32)

___

### GET\_USER\_EXCHANGE\_BALANCES

• **GET\_USER\_EXCHANGE\_BALANCES** = `"/api/v3/user/balances"`

#### Defined in

[defs/url_defs.ts:31](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L31)

___

### GET\_USER\_FEE\_RATE

• **GET\_USER\_FEE\_RATE** = `"/api/v3/user/feeRates"`

#### Defined in

[defs/url_defs.ts:37](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L37)

___

### GET\_USER\_NFT\_BALANCES

• **GET\_USER\_NFT\_BALANCES** = `"/api/v3/user/nft/balances"`

#### Defined in

[defs/url_defs.ts:101](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L101)

___

### GET\_USER\_NFT\_DEPOSIT\_HISTORY

• **GET\_USER\_NFT\_DEPOSIT\_HISTORY** = `"/api/v3/user/nft/deposits"`

#### Defined in

[defs/url_defs.ts:110](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L110)

___

### GET\_USER\_NFT\_MINT\_HISTORY

• **GET\_USER\_NFT\_MINT\_HISTORY** = `"/api/v3/user/nft/mints"`

#### Defined in

[defs/url_defs.ts:113](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L113)

___

### GET\_USER\_NFT\_TRANSACTION\_HISTORY

• **GET\_USER\_NFT\_TRANSACTION\_HISTORY** = `"/api/v3/user/nft/transactions"`

#### Defined in

[defs/url_defs.ts:112](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L112)

___

### GET\_USER\_NFT\_TRANSFER\_HISTORY

• **GET\_USER\_NFT\_TRANSFER\_HISTORY** = `"/api/v3/user/nft/transfers"`

#### Defined in

[defs/url_defs.ts:109](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L109)

___

### GET\_USER\_NFT\_WITHDRAW\_HISTORY

• **GET\_USER\_NFT\_WITHDRAW\_HISTORY** = `"/api/v3/user/nft/withdrawals"`

#### Defined in

[defs/url_defs.ts:111](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L111)

___

### GET\_USER\_ORDER\_FEE\_RATE

• **GET\_USER\_ORDER\_FEE\_RATE** = `"/api/v3/user/orderFee"`

#### Defined in

[defs/url_defs.ts:38](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L38)

___

### GET\_USER\_REG\_TXS

• **GET\_USER\_REG\_TXS** = `"/api/v3/user/createInfo"`

#### Defined in

[defs/url_defs.ts:29](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L29)

___

### GET\_USER\_TRADE\_AMOUNT

• **GET\_USER\_TRADE\_AMOUNT** = `"/api/v3/datacenter/getUserTradeAmount"`

#### Defined in

[defs/url_defs.ts:76](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L76)

___

### GET\_USER\_TRADE\_HISTORY

• **GET\_USER\_TRADE\_HISTORY** = `"/api/v3/user/trades"`

#### Defined in

[defs/url_defs.ts:35](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L35)

___

### GET\_USER\_TRANSFERS\_LIST

• **GET\_USER\_TRANSFERS\_LIST** = `"/api/v3/user/transfers"`

#### Defined in

[defs/url_defs.ts:34](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L34)

___

### GET\_USER\_TXS

• **GET\_USER\_TXS** = `"/api/v3/user/transactions"`

#### Defined in

[defs/url_defs.ts:36](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L36)

___

### GET\_USER\_VIP\_ASSETS

• **GET\_USER\_VIP\_ASSETS** = `"/api/v3/datacenter/getUserAssets"`

#### Defined in

[defs/url_defs.ts:100](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L100)

___

### GET\_USER\_VIP\_INFO

• **GET\_USER\_VIP\_INFO** = `"/api/v3/user/vipInfo"`

#### Defined in

[defs/url_defs.ts:98](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L98)

___

### GET\_WALLET\_TYPE

• **GET\_WALLET\_TYPE** = `"api/wallet/v3/wallet/type"`

#### Defined in

[defs/url_defs.ts:83](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L83)

___

### GET\_WITHDRAWAL\_AGENTS

• **GET\_WITHDRAWAL\_AGENTS** = `"/api/v3/exchange/withdrawalAgents"`

#### Defined in

[defs/url_defs.ts:13](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L13)

___

### GET\_WS\_KEY

• **GET\_WS\_KEY** = `"/v3/ws/key"`

#### Defined in

[defs/url_defs.ts:73](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L73)

___

### IPFS\_META\_URL

• **IPFS\_META\_URL** = `"https://infura-ipfs.io/ipfs/"`

#### Defined in

[defs/url_defs.ts:116](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L116)

___

### OFFICIAL\_LOCK\_OR\_UNLOCK

• **OFFICIAL\_LOCK\_OR\_UNLOCK** = `"/api/wallet/v3/officialLockOrUnlock"`

#### Defined in

[defs/url_defs.ts:87](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L87)

___

### ORDER\_ACTION

• **ORDER\_ACTION** = `"/api/v3/order"`

#### Defined in

[defs/url_defs.ts:6](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L6)

___

### ORDER\_CANCEL\_CLIENT\_ORDER\_ID\_LIST

• **ORDER\_CANCEL\_CLIENT\_ORDER\_ID\_LIST** = `"/api/v2/orders/byClientOrderId"`

#### Defined in

[defs/url_defs.ts:8](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L8)

___

### ORDER\_CANCEL\_HASH\_LIST

• **ORDER\_CANCEL\_HASH\_LIST** = `"/api/v2/orders/byHash"`

#### Defined in

[defs/url_defs.ts:7](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L7)

___

### POST\_EXIT\_AMM\_POOL

• **POST\_EXIT\_AMM\_POOL** = `"/api/v3/amm/exit"`

#### Defined in

[defs/url_defs.ts:57](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L57)

___

### POST\_INTERNAL\_TRANSFER

• **POST\_INTERNAL\_TRANSFER** = `"/api/v3/transfer"`

#### Defined in

[defs/url_defs.ts:26](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L26)

___

### POST\_JOIN\_AMM\_POOL

• **POST\_JOIN\_AMM\_POOL** = `"/api/v3/amm/join"`

#### Defined in

[defs/url_defs.ts:56](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L56)

___

### POST\_NFT\_INTERNAL\_TRANSFER

• **POST\_NFT\_INTERNAL\_TRANSFER** = `"/api/v3/nft/transfer"`

#### Defined in

[defs/url_defs.ts:103](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L103)

___

### POST\_NFT\_MINT

• **POST\_NFT\_MINT** = `"api/v3/nft/mint"`

#### Defined in

[defs/url_defs.ts:105](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L105)

___

### POST\_NFT\_TRADE

• **POST\_NFT\_TRADE** = `"/api/v3/nft/trade"`

#### Defined in

[defs/url_defs.ts:106](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L106)

___

### POST\_NFT\_VALIDATE\_ORDER

• **POST\_NFT\_VALIDATE\_ORDER** = `"/api/v3/nft/validateOrder"`

#### Defined in

[defs/url_defs.ts:107](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L107)

___

### POST\_NFT\_WITHDRAWALS

• **POST\_NFT\_WITHDRAWALS** = `"/api/v3/nft/withdrawal"`

#### Defined in

[defs/url_defs.ts:104](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L104)

___

### REJECT\_APPROVE\_SIGNATURE

• **REJECT\_APPROVE\_SIGNATURE** = `"/api/wallet/v3/rejectApproveSignature"`

#### Defined in

[defs/url_defs.ts:86](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L86)

___

### RESOLVE\_ENS

• **RESOLVE\_ENS** = `"/api/wallet/v3/resolveEns"`

#### Defined in

[defs/url_defs.ts:88](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L88)

___

### RESOLVE\_NAME

• **RESOLVE\_NAME** = `"/api/wallet/v3/resolveName"`

#### Defined in

[defs/url_defs.ts:89](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L89)

___

### SEND\_META\_TX

• **SEND\_META\_TX** = `"/api/wallet/v3/sendMetaTx"`

#### Defined in

[defs/url_defs.ts:90](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L90)

___

### SET\_REFERRER

• **SET\_REFERRER** = `"/api/v3/refer"`

#### Defined in

[defs/url_defs.ts:71](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L71)

___

### SUBMIT\_APPROVE\_SIGNATURE

• **SUBMIT\_APPROVE\_SIGNATURE** = `"/api/wallet/v3/submitApproveSignature"`

#### Defined in

[defs/url_defs.ts:85](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L85)

___

### WITHDRAWALS\_ACTION

• **WITHDRAWALS\_ACTION** = `"/api/v3/user/withdrawals"`

#### Defined in

[defs/url_defs.ts:33](https://github.com/Loopring/loopring_sdk/blob/2ea32ee/src/defs/url_defs.ts#L33)