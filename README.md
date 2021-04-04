# Kswap Interface


An open source interface for Kswap -- a protocol for decentralized exchange of Ethereum tokens.

- Website: [kimchiswap.io](https://kimchiswap.io/)
- Interface: [app.kimchiswap.io](https://app.kimchiswap.io)
- Docs: [kimchiswap.io/docs/](https://kimchiswap.io/docs/)
- Reddit: [/r/kimchiswap](https://www.reddit.com/r/kimchiswap/)
- Email: [admin@kimchiswap.io](mailto:admin@kimchiswap.io)

## Accessing the Kswap Interface

To access the Kswap Interface, use an IPFS gateway link from the
[latest release](https://github.com/kimchiswap/kswap-interface/releases/latest), 
or visit [app.kimchiswap.io](https://app.kimchiswap.io).

## Listing a token

Please see the
[@kimchiswap/default-token-list](https://github.com/kimchiswap/default-token-list) 
repository.

## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 

Note that the interface only works on testnets where both 
[Kswap V1](https://kimchiswap.io/docs/v1/smart-contracts/factory/) and 
[multicall](https://github.com/makerdao/multicall) are deployed.
The interface will not work on other networks.

## Contributions

**Please open all pull requests against the `master` branch.** 
CI checks will run against all PRs.

## Accessing Kswap Interface 

The Kswap Interface supports swapping against, and migrating or removing liquidity from Kswap . However,
if you would like to use Kswap, the Kswap interface for mainnet and testnets is accessible via IPFS gateways 
linked from the [v1.0.0 release](https://github.com/kimchiswap/Kswap-interface/releases/tag/v1.0.0).
