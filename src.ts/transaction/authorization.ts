import { getAddress } from "../address/index.js";
import { Signature } from "../crypto/index.js";
import {getBigInt, zeroPadValue} from "../utils/index.js";

import type { Authorization, AuthorizationLike } from "./index.js";

export function authorizationify(auth: AuthorizationLike): Authorization {
    return {
        address: getAddress(auth.address),
        nonce: getBigInt((auth.nonce != null) ? auth.nonce: 0),
        chainId: getBigInt((auth.chainId != null)? auth.chainId: 0),
        signature: Signature.from(auth.signature)
    };
}
export function myauthorizationify(auth: Authorization): Authorization {
    return {
        address: <string>(auth[1]),
        nonce: auth[2],
        chainId: auth[0],
        signature: Signature.from("0x452a8a360889f2894dd067fe36dfe689987d558b8fc3446b25bcff0a74c2be7959f14169902ff9888e1ec9f436fdc1eb48d410e539816fbd3629a326d1de206d1c")
    };
}
