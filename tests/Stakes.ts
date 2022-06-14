import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { assert } from "chai";
import { Stakes } from "../target/types/stakes";
describe("Stakes", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const { SystemProgram } = anchor.web3;
  const keypair = anchor.web3.Keypair.generate();
  const program = anchor.workspace.Stakes as Program<Stakes>;

  it("Is Create Program!", async () => {
    // Add your test here.
    await program.rpc.create({
      accounts: {
        stakeProgram: keypair.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      },
      signers: [keypair],
    });

    const fetching = await program.account.stakeStruct.fetch(keypair.publicKey);
    assert.ok(fetching.amount.eq(new anchor.BN(0)));
  });
});
