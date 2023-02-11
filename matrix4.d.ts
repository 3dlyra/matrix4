export function create(): Float32Array;
export function translate( m4: Float32Array, v3: Float32Array ): Float32Array;
export function rotateAxis( m4: Float32Array, v3: Float32Array, radian: number ): Float32Array;
export function scale( m4: Float32Array, v3: Float32Array ): Float32Array;
export function fromQuaternion( q: Float32Array ): Float32Array;
export function applyToVector3( m4: Float32Array, v3: Float32Array ): Float32Array;
