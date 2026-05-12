# Check Dist Hash

A GitHub Composite Action that calculates the SHA256 hash of the `dist` directory (currently hardcoded) and compares it with the previous build to determine if changes exist.

## How it Works

1. Generates a manifest file (`.candidate.manifest`) containing SHA256 hashes for all files in the `dist` directory.
2. Restores the previous manifest (`.live.manifest`) from GitHub Actions cache.
3. Compares the current manifest with the cached one.
4. Sets the `is-dirty` output to `true` if changes are detected.

## Interface

### Inputs

| Name           | Description                                                     | Default | Required |
| :------------- | :-------------------------------------------------------------- | :------ | :------- |
| `update-cache` | Whether to update the cached manifest when changes are detected | `false` | No       |

### Outputs

| Name       | Description                                                                                            |
| :--------- | :----------------------------------------------------------------------------------------------------- |
| `is-dirty` | Boolean string indicating if the `dist` directory differs from the cached manifest (`true` or `false`) |

## Usage

```yaml
- name: Check hash
  id: check_hash
  uses: ./.github/actions/check-dist-hash

- name: Conditional Execution
  if: steps.check_hash.outputs.is-dirty == 'true'
  run: echo "Changes detected. Proceeding..."
```
