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
