// Generated by @wagmi/cli@1.1.0 on 6/7/2023 at 8:39:16 PM
import {
  UseContractEventConfig,
  UseContractReadConfig,
  UseContractWriteConfig,
  UsePrepareContractWriteConfig,
  useContractEvent,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from 'wagmi'
import { PrepareWriteContractResult, ReadContractResult, WriteContractMode } from 'wagmi/actions'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// erc721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721ABI = [
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: '_fromTokenId', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: '_toTokenId', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'BatchMetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256', indexed: false }],
    name: 'MetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'name', outputs: [{ name: '', internalType: 'string', type: 'string' }] },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'owner', outputs: [{ name: '', internalType: 'address', type: 'address' }] },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
  },
  { stateMutability: 'nonpayable', type: 'function', inputs: [], name: 'renounceOwnership', outputs: [] },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'uri', internalType: 'string', type: 'string' },
    ],
    name: 'safeMint',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
  },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'symbol', outputs: [{ name: '', internalType: 'string', type: 'string' }] },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
  },
  {
    stateMutability: 'view',
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
  },
  { stateMutability: 'view', type: 'function', inputs: [], name: 'totalSupply', outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }] },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Read<TFunctionName extends string, TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, ...config } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"balanceOf"`.
 */
export function useErc721BalanceOf<TFunctionName extends 'balanceOf', TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'balanceOf', ...config } as UseContractReadConfig<
    typeof erc721ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"getApproved"`.
 */
export function useErc721GetApproved<TFunctionName extends 'getApproved', TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'getApproved', ...config } as UseContractReadConfig<
    typeof erc721ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"isApprovedForAll"`.
 */
export function useErc721IsApprovedForAll<
  TFunctionName extends 'isApprovedForAll',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>
>(config: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any) {
  return useContractRead({ abi: erc721ABI, functionName: 'isApprovedForAll', ...config } as UseContractReadConfig<
    typeof erc721ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"name"`.
 */
export function useErc721Name<TFunctionName extends 'name', TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'name', ...config } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"owner"`.
 */
export function useErc721Owner<TFunctionName extends 'owner', TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'owner', ...config } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"ownerOf"`.
 */
export function useErc721OwnerOf<TFunctionName extends 'ownerOf', TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'ownerOf', ...config } as UseContractReadConfig<
    typeof erc721ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"supportsInterface"`.
 */
export function useErc721SupportsInterface<
  TFunctionName extends 'supportsInterface',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>
>(config: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any) {
  return useContractRead({ abi: erc721ABI, functionName: 'supportsInterface', ...config } as UseContractReadConfig<
    typeof erc721ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"symbol"`.
 */
export function useErc721Symbol<TFunctionName extends 'symbol', TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'symbol', ...config } as UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"tokenByIndex"`.
 */
export function useErc721TokenByIndex<TFunctionName extends 'tokenByIndex', TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'tokenByIndex', ...config } as UseContractReadConfig<
    typeof erc721ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"tokenOfOwnerByIndex"`.
 */
export function useErc721TokenOfOwnerByIndex<
  TFunctionName extends 'tokenOfOwnerByIndex',
  TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>
>(config: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any) {
  return useContractRead({ abi: erc721ABI, functionName: 'tokenOfOwnerByIndex', ...config } as UseContractReadConfig<
    typeof erc721ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"tokenURI"`.
 */
export function useErc721TokenUri<TFunctionName extends 'tokenURI', TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'tokenURI', ...config } as UseContractReadConfig<
    typeof erc721ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractRead}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"totalSupply"`.
 */
export function useErc721TotalSupply<TFunctionName extends 'totalSupply', TSelectData = ReadContractResult<typeof erc721ABI, TFunctionName>>(
  config: Omit<UseContractReadConfig<typeof erc721ABI, TFunctionName, TSelectData>, 'abi' | 'functionName'> = {} as any
) {
  return useContractRead({ abi: erc721ABI, functionName: 'totalSupply', ...config } as UseContractReadConfig<
    typeof erc721ABI,
    TFunctionName,
    TSelectData
  >)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Write<TFunctionName extends string, TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc721ABI, string>['request']['abi'], TFunctionName, TMode>
    : UseContractWriteConfig<typeof erc721ABI, TFunctionName, TMode> & {
        abi?: never
      } = {} as any
) {
  return useContractWrite<typeof erc721ABI, TFunctionName, TMode>({ abi: erc721ABI, ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export function useErc721Approve<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc721ABI, 'approve'>['request']['abi'], 'approve', TMode> & {
        functionName?: 'approve'
      }
    : UseContractWriteConfig<typeof erc721ABI, 'approve', TMode> & {
        abi?: never
        functionName?: 'approve'
      } = {} as any
) {
  return useContractWrite<typeof erc721ABI, 'approve', TMode>({ abi: erc721ABI, functionName: 'approve', ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function useErc721RenounceOwnership<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc721ABI, 'renounceOwnership'>['request']['abi'], 'renounceOwnership', TMode> & {
        functionName?: 'renounceOwnership'
      }
    : UseContractWriteConfig<typeof erc721ABI, 'renounceOwnership', TMode> & {
        abi?: never
        functionName?: 'renounceOwnership'
      } = {} as any
) {
  return useContractWrite<typeof erc721ABI, 'renounceOwnership', TMode>({ abi: erc721ABI, functionName: 'renounceOwnership', ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeMint"`.
 */
export function useErc721SafeMint<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc721ABI, 'safeMint'>['request']['abi'], 'safeMint', TMode> & {
        functionName?: 'safeMint'
      }
    : UseContractWriteConfig<typeof erc721ABI, 'safeMint', TMode> & {
        abi?: never
        functionName?: 'safeMint'
      } = {} as any
) {
  return useContractWrite<typeof erc721ABI, 'safeMint', TMode>({ abi: erc721ABI, functionName: 'safeMint', ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function useErc721SafeTransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc721ABI, 'safeTransferFrom'>['request']['abi'], 'safeTransferFrom', TMode> & {
        functionName?: 'safeTransferFrom'
      }
    : UseContractWriteConfig<typeof erc721ABI, 'safeTransferFrom', TMode> & {
        abi?: never
        functionName?: 'safeTransferFrom'
      } = {} as any
) {
  return useContractWrite<typeof erc721ABI, 'safeTransferFrom', TMode>({ abi: erc721ABI, functionName: 'safeTransferFrom', ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function useErc721SetApprovalForAll<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc721ABI, 'setApprovalForAll'>['request']['abi'], 'setApprovalForAll', TMode> & {
        functionName?: 'setApprovalForAll'
      }
    : UseContractWriteConfig<typeof erc721ABI, 'setApprovalForAll', TMode> & {
        abi?: never
        functionName?: 'setApprovalForAll'
      } = {} as any
) {
  return useContractWrite<typeof erc721ABI, 'setApprovalForAll', TMode>({ abi: erc721ABI, functionName: 'setApprovalForAll', ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function useErc721TransferFrom<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc721ABI, 'transferFrom'>['request']['abi'], 'transferFrom', TMode> & {
        functionName?: 'transferFrom'
      }
    : UseContractWriteConfig<typeof erc721ABI, 'transferFrom', TMode> & {
        abi?: never
        functionName?: 'transferFrom'
      } = {} as any
) {
  return useContractWrite<typeof erc721ABI, 'transferFrom', TMode>({ abi: erc721ABI, functionName: 'transferFrom', ...config } as any)
}

/**
 * Wraps __{@link useContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function useErc721TransferOwnership<TMode extends WriteContractMode = undefined>(
  config: TMode extends 'prepared'
    ? UseContractWriteConfig<PrepareWriteContractResult<typeof erc721ABI, 'transferOwnership'>['request']['abi'], 'transferOwnership', TMode> & {
        functionName?: 'transferOwnership'
      }
    : UseContractWriteConfig<typeof erc721ABI, 'transferOwnership', TMode> & {
        abi?: never
        functionName?: 'transferOwnership'
      } = {} as any
) {
  return useContractWrite<typeof erc721ABI, 'transferOwnership', TMode>({ abi: erc721ABI, functionName: 'transferOwnership', ...config } as any)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__.
 */
export function usePrepareErc721Write<TFunctionName extends string>(
  config: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, TFunctionName>, 'abi'> = {} as any
) {
  return usePrepareContractWrite({ abi: erc721ABI, ...config } as UsePrepareContractWriteConfig<typeof erc721ABI, TFunctionName>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"approve"`.
 */
export function usePrepareErc721Approve(
  config: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, 'approve'>, 'abi' | 'functionName'> = {} as any
) {
  return usePrepareContractWrite({ abi: erc721ABI, functionName: 'approve', ...config } as UsePrepareContractWriteConfig<typeof erc721ABI, 'approve'>)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"renounceOwnership"`.
 */
export function usePrepareErc721RenounceOwnership(
  config: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, 'renounceOwnership'>, 'abi' | 'functionName'> = {} as any
) {
  return usePrepareContractWrite({ abi: erc721ABI, functionName: 'renounceOwnership', ...config } as UsePrepareContractWriteConfig<
    typeof erc721ABI,
    'renounceOwnership'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeMint"`.
 */
export function usePrepareErc721SafeMint(
  config: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, 'safeMint'>, 'abi' | 'functionName'> = {} as any
) {
  return usePrepareContractWrite({ abi: erc721ABI, functionName: 'safeMint', ...config } as UsePrepareContractWriteConfig<
    typeof erc721ABI,
    'safeMint'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"safeTransferFrom"`.
 */
export function usePrepareErc721SafeTransferFrom(
  config: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, 'safeTransferFrom'>, 'abi' | 'functionName'> = {} as any
) {
  return usePrepareContractWrite({ abi: erc721ABI, functionName: 'safeTransferFrom', ...config } as UsePrepareContractWriteConfig<
    typeof erc721ABI,
    'safeTransferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"setApprovalForAll"`.
 */
export function usePrepareErc721SetApprovalForAll(
  config: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, 'setApprovalForAll'>, 'abi' | 'functionName'> = {} as any
) {
  return usePrepareContractWrite({ abi: erc721ABI, functionName: 'setApprovalForAll', ...config } as UsePrepareContractWriteConfig<
    typeof erc721ABI,
    'setApprovalForAll'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferFrom"`.
 */
export function usePrepareErc721TransferFrom(
  config: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, 'transferFrom'>, 'abi' | 'functionName'> = {} as any
) {
  return usePrepareContractWrite({ abi: erc721ABI, functionName: 'transferFrom', ...config } as UsePrepareContractWriteConfig<
    typeof erc721ABI,
    'transferFrom'
  >)
}

/**
 * Wraps __{@link usePrepareContractWrite}__ with `abi` set to __{@link erc721ABI}__ and `functionName` set to `"transferOwnership"`.
 */
export function usePrepareErc721TransferOwnership(
  config: Omit<UsePrepareContractWriteConfig<typeof erc721ABI, 'transferOwnership'>, 'abi' | 'functionName'> = {} as any
) {
  return usePrepareContractWrite({ abi: erc721ABI, functionName: 'transferOwnership', ...config } as UsePrepareContractWriteConfig<
    typeof erc721ABI,
    'transferOwnership'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__.
 */
export function useErc721Event<TEventName extends string>(config: Omit<UseContractEventConfig<typeof erc721ABI, TEventName>, 'abi'> = {} as any) {
  return useContractEvent({ abi: erc721ABI, ...config } as UseContractEventConfig<typeof erc721ABI, TEventName>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Approval"`.
 */
export function useErc721ApprovalEvent(config: Omit<UseContractEventConfig<typeof erc721ABI, 'Approval'>, 'abi' | 'eventName'> = {} as any) {
  return useContractEvent({ abi: erc721ABI, eventName: 'Approval', ...config } as UseContractEventConfig<typeof erc721ABI, 'Approval'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"ApprovalForAll"`.
 */
export function useErc721ApprovalForAllEvent(
  config: Omit<UseContractEventConfig<typeof erc721ABI, 'ApprovalForAll'>, 'abi' | 'eventName'> = {} as any
) {
  return useContractEvent({ abi: erc721ABI, eventName: 'ApprovalForAll', ...config } as UseContractEventConfig<typeof erc721ABI, 'ApprovalForAll'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"BatchMetadataUpdate"`.
 */
export function useErc721BatchMetadataUpdateEvent(
  config: Omit<UseContractEventConfig<typeof erc721ABI, 'BatchMetadataUpdate'>, 'abi' | 'eventName'> = {} as any
) {
  return useContractEvent({ abi: erc721ABI, eventName: 'BatchMetadataUpdate', ...config } as UseContractEventConfig<
    typeof erc721ABI,
    'BatchMetadataUpdate'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"MetadataUpdate"`.
 */
export function useErc721MetadataUpdateEvent(
  config: Omit<UseContractEventConfig<typeof erc721ABI, 'MetadataUpdate'>, 'abi' | 'eventName'> = {} as any
) {
  return useContractEvent({ abi: erc721ABI, eventName: 'MetadataUpdate', ...config } as UseContractEventConfig<typeof erc721ABI, 'MetadataUpdate'>)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"OwnershipTransferred"`.
 */
export function useErc721OwnershipTransferredEvent(
  config: Omit<UseContractEventConfig<typeof erc721ABI, 'OwnershipTransferred'>, 'abi' | 'eventName'> = {} as any
) {
  return useContractEvent({ abi: erc721ABI, eventName: 'OwnershipTransferred', ...config } as UseContractEventConfig<
    typeof erc721ABI,
    'OwnershipTransferred'
  >)
}

/**
 * Wraps __{@link useContractEvent}__ with `abi` set to __{@link erc721ABI}__ and `eventName` set to `"Transfer"`.
 */
export function useErc721TransferEvent(config: Omit<UseContractEventConfig<typeof erc721ABI, 'Transfer'>, 'abi' | 'eventName'> = {} as any) {
  return useContractEvent({ abi: erc721ABI, eventName: 'Transfer', ...config } as UseContractEventConfig<typeof erc721ABI, 'Transfer'>)
}
