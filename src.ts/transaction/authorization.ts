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
        signature: Signature.from({
        yParity: auth[3],
        r: zeroPadValue(auth[4], 32),
        s: zeroPadValue(auth[5], 32)

    };
}
