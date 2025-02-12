

const RightSidebar = ({user, transactions, banks}:
    RightSidebarProps
) => {
  return (
    <aside className="right-sidebar">
        <section className="flex flex-col pt-8">
            <div className="profile-banner">
                <div className="profile">
                    <div className="profile-img">
                        <span className="text-5xl font-bold text-blue-500">
                            {user.firstName.charAt
                            (0)}
                        </span>
                    </div>

                    <div className="profile-details">
                        <h1>
                            {user.firstName} {user.lastName}
                        </h1>
                    </div>
                </div>
            </div>

        </section>
  </aside>
  )
};

export default RightSidebar;
