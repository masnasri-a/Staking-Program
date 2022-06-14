import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Stakes } from "../target/types/stakes";

describe("Stakes", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Stakes as Program<Stakes>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
