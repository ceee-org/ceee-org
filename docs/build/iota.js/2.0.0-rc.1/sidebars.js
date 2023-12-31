module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'welcome',
      label: 'Welcome',
    },
    {
      type: 'doc',
      label: 'Getting Started',
      id: 'getting_started',
    },
    {
      type: 'category',
      label: 'How Tos',
      items: [
        'how_tos/run_how_tos',
        'how_tos/simple',
        'how_tos/address',
        'how_tos/peers',
        'how_tos/data',
        'how_tos/transaction',
        'how_tos/pow',
        'how_tos/browser',
        'how_tos/mint_nft',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'category',
          label: 'Value Transactions',
          link: {
            type: 'doc',
            id: 'tutorials/value-transactions/introduction',
          },
          items: [
            'tutorials/value-transactions/prepare-the-dev-env',
            'tutorials/value-transactions/generate-a-seed',
            'tutorials/value-transactions/generate-addresses',
            'tutorials/value-transactions/public-addresses',
            'tutorials/value-transactions/request-funds-from-the-faucet',
            'tutorials/value-transactions/query-output-details',
            'tutorials/value-transactions/transfer-funds',
            'tutorials/value-transactions/understanding-deposits',
            'tutorials/value-transactions/sweep-outputs-to-reduce-deposits',
          ],
        },
        {
          type: 'category',
          label: 'Alias Transactions',
          link: {
            type: 'doc',
            id: 'tutorials/alias-transactions/introduction',
          },
          items: [
            'tutorials/alias-transactions/prepare-the-dev-env',
            'tutorials/alias-transactions/mint-new-alias',
            'tutorials/alias-transactions/alias-transaction',
          ],
        },
        {
          type: 'category',
          label: 'Native Token Transactions',
          link: {
            type: 'doc',
            id: 'tutorials/native-token-transactions/introduction',
          },
          items: [
            'tutorials/native-token-transactions/prepare-the-dev-env',
            'tutorials/native-token-transactions/mint-native-tokens',
            'tutorials/native-token-transactions/native-tokens-transaction',
            'tutorials/native-token-transactions/melt-native-tokens',
          ],
        },
        {
          type: 'category',
          label: 'NFT Transactions',
          link: { type: 'doc', id: 'tutorials/nft-transactions/introduction' },
          items: [
            'tutorials/nft-transactions/prepare-the-dev-env',
            'tutorials/nft-transactions/mint-new-nft',
            'tutorials/nft-transactions/nft-transaction',
            'tutorials/nft-transactions/claim-nft',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'category',
          label: '@iota/iota.js',
          items: [
            {
              type: 'doc',
              id: 'references/client/api_ref',
              label: 'API Reference',
            },
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'references/client/classes',
                },
              ],
            },
            {
              type: 'category',
              label: 'Enums',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'references/client/enums',
                },
              ],
            },
            {
              type: 'category',
              label: 'Interfaces',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'references/client/interfaces',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '@iota/crypto.js',
          items: [
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'references/crypto/classes',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '@iota/mqtt.js',
          items: [
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'references/mqtt/classes',
                },
              ],
            },
            {
              type: 'category',
              label: 'Interfaces',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'references/mqtt/interfaces',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '@iota/pow-neon.js',
          items: [
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'references/pow-neon/classes',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '@iota/pow-node.js',
          items: [
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'references/pow-node/classes',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '@iota/pow-wasm.js',
          items: [
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'references/pow-wasm/classes',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '@iota/util.js',
          items: [
            {
              type: 'category',
              label: 'Classes',
              items: [
                {
                  type: 'autogenerated',
                  dirName: 'references/util/classes',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'troubleshooting',
      label: 'Troubleshooting',
    },
    {
      type: 'doc',
      id: 'contribute',
      label: 'Contribute',
    },
  ],
};
