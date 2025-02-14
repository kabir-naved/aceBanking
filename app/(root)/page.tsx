import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

export default function Home() {
    const loggedIn = {firstName: "Kabir", lastName: "Naved", email: "example@gmail.com"};
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

        <RightSidebar
          user={loggedIn}
          transactions={[]}
          banks={[{}, {}]}
        />
      </section>
    </>
  );
}
