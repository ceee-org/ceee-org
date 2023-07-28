---
# !!! DO NOT MODIFY !!!
# This file is auto-generated by the gendoc tool based on the source code of the app.
description: This section describes the configuration parameters and their types for WASP.
keywords:
  - IOTA Node
  - Hornet Node
  - WASP Node
  - Smart Contracts
  - L2
  - Configuration
  - JSON
  - Customize
  - Config
  - reference
---

# Core Configuration

WASP uses a JSON standard format as a config file. If you are unsure about JSON syntax, you can find more information in the [official JSON specs](https://www.json.org).

You can change the path of the config file by using the `-c` or `--config` argument while executing `wasp` executable.

For example:

```shell
wasp -c config_defaults.json
```

You can always get the most up-to-date description of the config parameters by running:

```shell
wasp -h --full
```

## <a id="app"></a> 1. Application

| Name                      | Description                                            | Type    | Default value |
| ------------------------- | ------------------------------------------------------ | ------- | ------------- |
| checkForUpdates           | Whether to check for updates of the application or not | boolean | true          |
| [shutdown](#app_shutdown) | Configuration for shutdown                             | object  |               |

### <a id="app_shutdown"></a> Shutdown

| Name                     | Description                                                                                            | Type   | Default value |
| ------------------------ | ------------------------------------------------------------------------------------------------------ | ------ | ------------- |
| stopGracePeriod          | The maximum time to wait for background processes to finish during shutdown before terminating the app | string | "5m"          |
| [log](#app_shutdown_log) | Configuration for Shutdown Log                                                                         | object |               |

### <a id="app_shutdown_log"></a> Shutdown Log

| Name     | Description                                         | Type    | Default value  |
| -------- | --------------------------------------------------- | ------- | -------------- |
| enabled  | Whether to store self-shutdown events to a log file | boolean | true           |
| filePath | The file path to the self-shutdown log              | string  | "shutdown.log" |

Example:

```json
{
  "app": {
    "checkForUpdates": true,
    "shutdown": {
      "stopGracePeriod": "5m",
      "log": {
        "enabled": true,
        "filePath": "shutdown.log"
      }
    }
  }
}
```

## <a id="logger"></a> 2. Logger

| Name                                     | Description                                                                 | Type    | Default value |
| ---------------------------------------- | --------------------------------------------------------------------------- | ------- | ------------- |
| level                                    | The minimum enabled logging level                                           | string  | "info"        |
| disableCaller                            | Stops annotating logs with the calling function's file name and line number | boolean | true          |
| disableStacktrace                        | Disables automatic stacktrace capturing                                     | boolean | false         |
| stacktraceLevel                          | The level stacktraces are captured and above                                | string  | "panic"       |
| encoding                                 | The logger's encoding (options: "json", "console")                          | string  | "console"     |
| [encodingConfig](#logger_encodingconfig) | Configuration for encodingConfig                                            | object  |               |
| outputPaths                              | A list of URLs, file paths or stdout/stderr to write logging output to      | array   | stdout        |
| disableEvents                            | Prevents log messages from being raced as events                            | boolean | true          |

### <a id="logger_encodingconfig"></a> EncodingConfig

| Name        | Description                                                                                                | Type   | Default value |
| ----------- | ---------------------------------------------------------------------------------------------------------- | ------ | ------------- |
| timeEncoder | Sets the logger's timestamp encoding. (options: "nanos", "millis", "iso8601", "rfc3339" and "rfc3339nano") | string | "rfc3339"     |

Example:

```json
{
  "logger": {
    "level": "info",
    "disableCaller": true,
    "disableStacktrace": false,
    "stacktraceLevel": "panic",
    "encoding": "console",
    "encodingConfig": {
      "timeEncoder": "rfc3339"
    },
    "outputPaths": ["stdout"],
    "disableEvents": true
  }
}
```

## <a id="inx"></a> 3. INX

| Name                  | Description                                                                                        | Type   | Default value    |
| --------------------- | -------------------------------------------------------------------------------------------------- | ------ | ---------------- |
| address               | The INX address to which to connect to                                                             | string | "localhost:9029" |
| maxConnectionAttempts | The amount of times the connection to INX will be attempted before it fails (1 attempt per second) | uint   | 30               |
| targetNetworkName     | The network name on which the node should operate on (optional)                                    | string | ""               |

Example:

```json
{
  "inx": {
    "address": "localhost:9029",
    "maxConnectionAttempts": 30,
    "targetNetworkName": ""
  }
}
```

## <a id="db"></a> 4. Database

| Name                         | Description                              | Type    | Default value |
| ---------------------------- | ---------------------------------------- | ------- | ------------- |
| engine                       | The used database engine (rocksdb/mapdb) | string  | "rocksdb"     |
| [chainState](#db_chainstate) | Configuration for chainState             | object  |               |
| debugSkipHealthCheck         | Ignore the check for corrupted databases | boolean | true          |

### <a id="db_chainstate"></a> ChainState

| Name | Description                                  | Type   | Default value        |
| ---- | -------------------------------------------- | ------ | -------------------- |
| path | The path to the chain state databases folder | string | "waspdb/chains/data" |

Example:

```json
{
  "db": {
    "engine": "rocksdb",
    "chainState": {
      "path": "waspdb/chains/data"
    },
    "debugSkipHealthCheck": true
  }
}
```

## <a id="p2p"></a> 5. P2p

| Name                      | Description                | Type   | Default value |
| ------------------------- | -------------------------- | ------ | ------------- |
| [identity](#p2p_identity) | Configuration for identity | object |               |
| [db](#p2p_db)             | Configuration for Database | object |               |

### <a id="p2p_identity"></a> Identity

| Name       | Description                                             | Type   | Default value                  |
| ---------- | ------------------------------------------------------- | ------ | ------------------------------ |
| privateKey | Private key used to derive the node identity (optional) | string | ""                             |
| filePath   | The path to the node identity PEM file                  | string | "waspdb/identity/identity.key" |

### <a id="p2p_db"></a> Database

| Name | Description                  | Type   | Default value     |
| ---- | ---------------------------- | ------ | ----------------- |
| path | The path to the p2p database | string | "waspdb/p2pstore" |

Example:

```json
{
  "p2p": {
    "identity": {
      "privateKey": "",
      "filePath": "waspdb/identity/identity.key"
    },
    "db": {
      "path": "waspdb/p2pstore"
    }
  }
}
```

## <a id="registries"></a> 6. Registries

| Name                                         | Description                      | Type   | Default value |
| -------------------------------------------- | -------------------------------- | ------ | ------------- |
| [chains](#registries_chains)                 | Configuration for chains         | object |               |
| [dkShares](#registries_dkshares)             | Configuration for dkShares       | object |               |
| [trustedPeers](#registries_trustedpeers)     | Configuration for trustedPeers   | object |               |
| [consensusState](#registries_consensusstate) | Configuration for consensusState | object |               |

### <a id="registries_chains"></a> Chains

| Name     | Description                         | Type   | Default value                       |
| -------- | ----------------------------------- | ------ | ----------------------------------- |
| filePath | The path to the chain registry file | string | "waspdb/chains/chain_registry.json" |

### <a id="registries_dkshares"></a> DkShares

| Name | Description                                              | Type   | Default value     |
| ---- | -------------------------------------------------------- | ------ | ----------------- |
| path | The path to the distributed key shares registries folder | string | "waspdb/dkshares" |

### <a id="registries_trustedpeers"></a> TrustedPeers

| Name     | Description                                 | Type   | Default value               |
| -------- | ------------------------------------------- | ------ | --------------------------- |
| filePath | The path to the trusted peers registry file | string | "waspdb/trusted_peers.json" |

### <a id="registries_consensusstate"></a> ConsensusState

| Name | Description                                       | Type   | Default value             |
| ---- | ------------------------------------------------- | ------ | ------------------------- |
| path | The path to the consensus state registries folder | string | "waspdb/chains/consensus" |

Example:

```json
{
  "registries": {
    "chains": {
      "filePath": "waspdb/chains/chain_registry.json"
    },
    "dkShares": {
      "path": "waspdb/dkshares"
    },
    "trustedPeers": {
      "filePath": "waspdb/trusted_peers.json"
    },
    "consensusState": {
      "path": "waspdb/chains/consensus"
    }
  }
}
```

## <a id="peering"></a> 7. Peering

| Name       | Description                                          | Type   | Default value  |
| ---------- | ---------------------------------------------------- | ------ | -------------- |
| peeringURL | Node host address as it is recognized by other peers | string | "0.0.0.0:4000" |
| port       | Port for Wasp committee connection/peering           | int    | 4000           |

Example:

```json
{
  "peering": {
    "peeringURL": "0.0.0.0:4000",
    "port": 4000
  }
}
```

## <a id="chains"></a> 8. Chains

| Name                             | Description                                                                                             | Type    | Default value |
| -------------------------------- | ------------------------------------------------------------------------------------------------------- | ------- | ------------- |
| broadcastUpToNPeers              | Number of peers an offledger request is broadcasted to                                                  | int     | 2             |
| broadcastInterval                | Time between re-broadcast of offledger requests                                                         | string  | "5s"          |
| apiCacheTTL                      | Time to keep processed offledger requests in api cache                                                  | string  | "5m"          |
| pullMissingRequestsFromCommittee | Whether or not to pull missing requests from other committee members                                    | boolean | true          |
| deriveAliasOutputByQuorum        | False means we propose own AliasOutput, true - by majority vote.                                        | boolean | true          |
| pipeliningLimit                  | -1 -- infinite, 0 -- disabled, X -- build the chain if there is up to X transactions unconfirmed by L1. | int     | -1            |
| consensusDelay                   | Minimal delay between consensus runs.                                                                   | string  | "500ms"       |

Example:

```json
{
  "chains": {
    "broadcastUpToNPeers": 2,
    "broadcastInterval": "5s",
    "apiCacheTTL": "5m",
    "pullMissingRequestsFromCommittee": true,
    "deriveAliasOutputByQuorum": true,
    "pipeliningLimit": -1,
    "consensusDelay": "500ms"
  }
}
```

## <a id="statemanager"></a> 9. StateManager

| Name                              | Description                                                                                   | Type   | Default value |
| --------------------------------- | --------------------------------------------------------------------------------------------- | ------ | ------------- |
| blockCacheMaxSize                 | How many blocks may be stored in cache before old ones start being deleted                    | int    | 1000          |
| blockCacheBlocksInCacheDuration   | How long should the block stay in block cache before being deleted                            | string | "1h"          |
| blockCacheBlockCleaningPeriod     | How often should the block cache be cleaned                                                   | string | "1m"          |
| stateManagerGetBlockRetry         | How often get block requests should be repeated                                               | string | "3s"          |
| stateManagerRequestCleaningPeriod | How often requests waiting for response should be checked for expired context                 | string | "1s"          |
| stateManagerTimerTickPeriod       | How often timer tick fires in state manager                                                   | string | "1s"          |
| pruningMinStatesToKeep            | This number of states will always be available in the store; if 0 - store pruning is disabled | int    | 10000         |
| pruningMaxStatesToDelete          | On single store pruning attempt at most this number of states will be deleted                 | int    | 1000          |

Example:

```json
{
  "stateManager": {
    "blockCacheMaxSize": 1000,
    "blockCacheBlocksInCacheDuration": "1h",
    "blockCacheBlockCleaningPeriod": "1m",
    "stateManagerGetBlockRetry": "3s",
    "stateManagerRequestCleaningPeriod": "1s",
    "stateManagerTimerTickPeriod": "1s",
    "pruningMinStatesToKeep": 10000,
    "pruningMaxStatesToDelete": 1000
  }
}
```

## <a id="validator"></a> 10. Validator

| Name    | Description                                                                                                        | Type   | Default value |
| ------- | ------------------------------------------------------------------------------------------------------------------ | ------ | ------------- |
| address | Bech32 encoded address to identify the node (as access node on gov contract and to collect validator fee payments) | string | ""            |

Example:

```json
{
  "validator": {
    "address": ""
  }
}
```

## <a id="wal"></a> 11. Write-Ahead Logging

| Name    | Description                                  | Type    | Default value |
| ------- | -------------------------------------------- | ------- | ------------- |
| enabled | Whether the "write-ahead logging" is enabled | boolean | true          |
| path    | The path to the "write-ahead logging" folder | string  | "waspdb/wal"  |

Example:

```json
{
  "wal": {
    "enabled": true,
    "path": "waspdb/wal"
  }
}
```

## <a id="webapi"></a> 12. Web API

| Name                      | Description                                              | Type    | Default value  |
| ------------------------- | -------------------------------------------------------- | ------- | -------------- |
| enabled                   | Whether the web api plugin is enabled                    | boolean | true           |
| bindAddress               | The bind address for the node web api                    | string  | "0.0.0.0:9090" |
| [auth](#webapi_auth)      | Configuration for auth                                   | object  |                |
| [limits](#webapi_limits)  | Configuration for limits                                 | object  |                |
| debugRequestLoggerEnabled | Whether the debug logging for requests should be enabled | boolean | false          |

### <a id="webapi_auth"></a> Auth

| Name                        | Description                            | Type   | Default value |
| --------------------------- | -------------------------------------- | ------ | ------------- |
| scheme                      | Selects which authentication to choose | string | "jwt"         |
| [jwt](#webapi_auth_jwt)     | Configuration for JWT Auth             | object |               |
| [basic](#webapi_auth_basic) | Configuration for Basic Auth           | object |               |
| [ip](#webapi_auth_ip)       | Configuration for IP-based Auth        | object |               |

### <a id="webapi_auth_jwt"></a> JWT Auth

| Name     | Description        | Type   | Default value |
| -------- | ------------------ | ------ | ------------- |
| duration | Jwt token lifetime | string | "24h"         |

### <a id="webapi_auth_basic"></a> Basic Auth

| Name     | Description                                     | Type   | Default value |
| -------- | ----------------------------------------------- | ------ | ------------- |
| username | The username which grants access to the service | string | "wasp"        |

### <a id="webapi_auth_ip"></a> IP-based Auth

| Name      | Description                                          | Type  | Default value |
| --------- | ---------------------------------------------------- | ----- | ------------- |
| whitelist | A list of ips that are allowed to access the service | array | 0.0.0.0       |

### <a id="webapi_limits"></a> Limits

| Name                           | Description                                                                   | Type   | Default value |
| ------------------------------ | ----------------------------------------------------------------------------- | ------ | ------------- |
| timeout                        | The timeout after which a long running operation will be canceled             | string | "30s"         |
| readTimeout                    | The read timeout for the HTTP request body                                    | string | "10s"         |
| writeTimeout                   | The write timeout for the HTTP response body                                  | string | "1m"          |
| maxBodyLength                  | The maximum number of characters that the body of an API call may contain     | string | "2M"          |
| maxTopicSubscriptionsPerClient | Defines the max amount of subscriptions per client. 0 = deactivated (default) | int    | 0             |
| confirmedStateLagThreshold     | The threshold that define a chain is unsynchronized                           | uint   | 2             |

Example:

```json
{
  "webapi": {
    "enabled": true,
    "bindAddress": "0.0.0.0:9090",
    "auth": {
      "scheme": "jwt",
      "jwt": {
        "duration": "24h"
      },
      "basic": {
        "username": "wasp"
      },
      "ip": {
        "whitelist": ["0.0.0.0"]
      }
    },
    "limits": {
      "timeout": "30s",
      "readTimeout": "10s",
      "writeTimeout": "1m",
      "maxBodyLength": "2M",
      "maxTopicSubscriptionsPerClient": 0,
      "confirmedStateLagThreshold": 2
    },
    "debugRequestLoggerEnabled": false
  }
}
```

## <a id="profiling"></a> 13. Profiling

| Name        | Description                                       | Type    | Default value    |
| ----------- | ------------------------------------------------- | ------- | ---------------- |
| enabled     | Whether the profiling component is enabled        | boolean | false            |
| bindAddress | The bind address on which the profiler listens on | string  | "localhost:6060" |

Example:

```json
{
  "profiling": {
    "enabled": false,
    "bindAddress": "localhost:6060"
  }
}
```

## <a id="profilingrecorder"></a> 14. ProfilingRecorder

| Name    | Description                                     | Type    | Default value |
| ------- | ----------------------------------------------- | ------- | ------------- |
| enabled | Whether the ProfilingRecorder plugin is enabled | boolean | false         |

Example:

```json
{
  "profilingRecorder": {
    "enabled": false
  }
}
```

## <a id="prometheus"></a> 15. Prometheus

| Name        | Description                                                  | Type    | Default value  |
| ----------- | ------------------------------------------------------------ | ------- | -------------- |
| enabled     | Whether the prometheus plugin is enabled                     | boolean | true           |
| bindAddress | The bind address on which the Prometheus exporter listens on | string  | "0.0.0.0:2112" |

Example:

```json
{
  "prometheus": {
    "enabled": true,
    "bindAddress": "0.0.0.0:2112"
  }
}
```