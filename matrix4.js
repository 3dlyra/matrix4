export function create() {

	return new Float32Array( [
		1, 0, 0, 0,
		0, 1, 0, 0,
		0, 0, 1, 0,
		0, 0, 0, 1
	] )
}

export function translate( m4, v3 ) {

	return new Float32Array( [
		m4[ 0 ], m4[ 1 ], m4[ 2 ], m4[ 3 ],
		m4[ 4 ], m4[ 5 ], m4[ 6 ], m4[ 7 ],
		m4[ 8 ], m4[ 9 ], m4[ 10 ], m4[ 11 ],
		m4[ 0 ] * v3[ 0 ] + m4[ 4 ] * v3[ 1 ] + m4[ 8 ] * v3[ 2 ] + m4[ 12 ], m4[ 1 ] * v3[ 0 ] + m4[ 5 ] * v3[ 1 ] + m4[ 9 ] * v3[ 2 ] + m4[ 13 ], m4[ 2 ] * v3[ 0 ] + m4[ 6 ] * v3[ 1 ] + m4[ 10 ] * v3[ 2 ] + m4[ 14 ], m4[ 3 ] * v3[ 0 ] + m4[ 7 ] * v3[ 1 ] + m4[ 11 ] * v3[ 2 ] + m4[ 15 ]
	] )
}

function rotateAxis( m4, v3, radian ) {

	const len = 1 / Math.sqrt( v3[ 0 ] * v3[ 0 ] + v3[ 1 ] * v3[ 1 ] + v3[ 2 ] * v3[ 2 ] )
	const x = v3[ 0 ] * len
	const y = v3[ 1 ] * len
	const z = v3[ 2 ] * len
	const sin = Math.sin( radian )
	const cos = Math.cos( radian )

	return new Float32Array( [
		m4[ 0 ] * ( x * x * ( 1 - cos ) + cos ) + m4[ 4 ] * ( y * x * ( 1 - cos ) + z * sin ) + m4[ 8 ] * ( z * x * ( 1 - cos ) - y * sin ), m4[ 1 ] * ( x * x * ( 1 - cos ) + cos ) + m4[ 5 ] * ( y * x * ( 1 - cos ) + z * sin ) + m4[ 9 ] * ( z * x * ( 1 - cos ) - y * sin ), m4[ 2 ] * ( x * x * ( 1 - cos ) + cos ) + m4[ 6 ] * ( y * x * ( 1 - cos ) + z * sin ) + m4[ 10 ] * ( z * x * ( 1 - cos ) - y * sin ), m4[ 3 ] * ( x * x * ( 1 - cos ) + cos ) + m4[ 7 ] * ( y * x * ( 1 - cos ) + z * sin ) + m4[ 11 ] * ( z * x * ( 1 - cos ) - y * sin ),
		m4[ 0 ] * ( x * y * ( 1 - cos ) - z * sin ) + m4[ 4 ] * ( y * y * ( 1 - cos ) + cos ) + m4[ 8 ] * ( z * y * ( 1 - cos ) + x * sin ), m4[ 1 ] * ( x * y * ( 1 - cos ) - z * sin ) + m4[ 5 ] * ( y * y * ( 1 - cos ) + cos ) + m4[ 9 ] * ( z * y * ( 1 - cos ) + x * sin ), m4[ 2 ] * ( x * y * ( 1 - cos ) - z * sin ) + m4[ 6 ] * ( y * y * ( 1 - cos ) + cos ) + m4[ 10 ] * ( z * y * ( 1 - cos ) + x * sin ), m4[ 3 ] * ( x * y * ( 1 - cos ) - z * sin ) + m4[ 7 ] * ( y * y * ( 1 - cos ) + cos ) + m4[ 11 ] * ( z * y * ( 1 - cos ) + x * sin ),
		m4[ 0 ] * ( x * z * ( 1 - cos ) + y * sin ) + m4[ 4 ] * ( y * z * ( 1 - cos ) - x * sin ) + m4[ 8 ] * ( z * z * ( 1 - cos ) + cos ), m4[ 1 ] * ( x * z * ( 1 - cos ) + y * sin ) + m4[ 5 ] * ( y * z * ( 1 - cos ) - x * sin ) + m4[ 9 ] * ( z * z * ( 1 - cos ) + cos ), m4[ 2 ] * ( x * z * ( 1 - cos ) + y * sin ) + m4[ 6 ] * ( y * z * ( 1 - cos ) - x * sin ) + m4[ 10 ] * ( z * z * ( 1 - cos ) + cos ), m4[ 3 ] * ( x * z * ( 1 - cos ) + y * sin ) + m4[ 7 ] * ( y * z * ( 1 - cos ) - x * sin ) + m4[ 11 ] * ( z * z * ( 1 - cos ) + cos ),
		m4[ 12 ], m4[ 13 ], m4[ 14 ], m4[ 15 ]
	] )
}
