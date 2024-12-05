import HeaderBox from '@/components/header-box'
import RightSidebar from '@/components/right-sidebar'
import TotalBalanceBox from '@/components/total-balance-box'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: 'Jay', lastName: 'GHZ', email: 'contact@gmail.com' }
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />


          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.32}
          />
        </header>

        Recent Transactions
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1140.50 }, { currentBalance: 110.82 }]}
      />
    </section>
  )
}

export default Home