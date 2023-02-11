# Matrix4
This library is the 4x4 matrix part of the 3DLyra's math library.
### Installation
```
npm i @3dlyra/matrix4
```
### Example
```JavaScript
import * as Matrix4 from "@3dlyra/matrix4"

{
  const m = Matrix4.create() // (a.k.a identity) Float32Array[ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ]
  const position = Matrix4.translate( m, [ 1, 2, 3 ] )
  console.log( Matrix4.applyToVector3( position, [ 4, 5, 6 ] ) ) // [ 5, 7, 9 ]
}

{
  const m = Matrix4.create()
  const rotation = Matrix4.rotateAxis( m, [ 1, 0, 0 ], Math.PI / 2 ) // rotate by x-axis
  console.log( Matrix4.applyToVector3( rotation, [ 2, 4, 8 ] ) ) // [ 2, -8, 4 ]
}

{
  const m = Matrix4.create()
  const scale = Matrix4.scale( m, [ 1, 2, 3 ] )
  console.log( Matrix4.applyToVector3( scale, [ 4, 5, 6 ] ) ) // [ 4, 10, 18 ]
}
```

### API
```TypeScript
// type matrix4 = Float32Array( 16 )
// type quaternion = Float32Array( 4 ) [or use @3dlyra/quaternion]
// type vector3 = Float32Array( 3 ) [or use @3dlyra/vector3]

create(): matrix4;
translate( m4: matrix4, v3: vector3 ): matrix4;
rotateAxis( m4: matrix4, v3: vector3, radian: number ): matrix4;
scale( m4: matrix4, v3: vector3 ): matrix4;
fromQuaternion( q: quaternion ): matrix4;
applyToVector3( m4: matrix4, v3: vector3 ): vector3;
```
