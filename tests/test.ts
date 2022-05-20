/// <reference path="../types.d.ts" />
// @ts-ignore
import test from 'node:test'
import assert from 'node:assert'
import dotenv from 'dotenv'

dotenv.config();

const { APP_URL } = process.env;

test('test api/hello', async (t:any) => {
    const query = new URLSearchParams({
        name: 'test'
    });
    const resp: Response = await fetch(`${APP_URL}/api/hello?${query}`);
    const data: JsonObject = await resp.json()
    assert.equal(data.name, 'test')
})