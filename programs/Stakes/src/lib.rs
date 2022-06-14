use anchor_lang::prelude::*;
use anchor_lang::solana_program::entrypoint::ProgramResult;
declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod stakes {

    use super::*;

    pub fn create(ctx:Context<Create>) -> ProgramResult{
        let create = &mut ctx.accounts.stake_program;
        create.amount = 0;
        Ok(())
    }

}

#[derive(Accounts)]
pub struct Create<'info>{
    #[account(init, payer=user, space=16+16)]
    pub stake_program : Account<'info,StakeStruct>,
    #[account(mut)]
    pub user : Signer<'info>,
    pub system_program : Program<'info, System>
}
#[account]
pub struct StakeStruct{
    pub amount : u64,
}