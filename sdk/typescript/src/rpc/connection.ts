// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

interface ConnectionOptions {
	fullnode: string;
	websocket?: string;
	faucet?: string;
	faucetV1?: string;
}

export class Connection {
	#options: ConnectionOptions;
	constructor(options: ConnectionOptions) {
		this.#options = options;
	}

	get fullnode() {
		return this.#options.fullnode;
	}

	// TODO: Decide if we should default the websocket URL like this:
	get websocket() {
		return this.#options.websocket || this.#options.fullnode;
	}

	get faucet() {
		return this.#options.faucet;
	}

	get faucetV1() {
		return this.#options.faucetV1;
	}
}

// TODO: Maybe don't have pre-built connections, and instead just have pre-built objects that folks
// can use with the connection?
export const localnetConnection = new Connection({
	fullnode: 'http://127.0.0.1:9000',
	faucet: 'http://127.0.0.1:9123/gas',
	faucetV1: 'http://127.0.0.1:9123/v1/',
});

export const devnetConnection = new Connection({
	fullnode: 'https://fullnode.devnet.sui.io:443/',
	faucet: 'https://faucet.devnet.sui.io/gas',
	faucetV1: 'https://faucet.devnet.sui.io/v1/',
});

export const testnetConnection = new Connection({
	fullnode: 'https://fullnode.testnet.sui.io:443/',
	faucet: 'https://faucet.testnet.sui.io/gas',
	faucetV1: 'https://faucet.testnet.sui.io/v1/',
});

export const mainnetConnection = new Connection({
	fullnode: 'https://fullnode.mainnet.sui.io:443/',
});
