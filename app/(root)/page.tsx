import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

export default function Home() {
    const loggedIn = {firstName: "Kabir"};
  return (
    <>
      <section className="home ">
        <div className="home-content">
            <header className="home-header">

              {/* HeaderBox component */}
              <HeaderBox
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName}
                subtext="Access and manage your account and transactions with ease and security from anywhere."
              />
              {/* HeaderBox component */}
              <TotalBalanceBox 
                accounts= {[]}
                totalBanks= {1000000}
                totalCurrentBalance= {1000000}
              />
            </header>
        </div>
      </section>
    </>
  );
}
