import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import { isAuthenticated } from "../../utils/AuthService";
import { useEffect } from "react";
import Layout from "../../components/layout";
import CardLineChart from "../../components/Cards/CardLineChart.js";
import CardBarChart from "../../components/Cards/CardBarChart";
// import CardPageVisits from "../components/Cards/CardPageVisits.js";
// import CardSocialTraffic from "../components/Cards/CardSocialTraffic.js";

export default function Home() {
  const { currentUser, setCurrentUser } = useContext(DataContext);
  const checkLoggedIn = async () => {
    let cuser = isAuthenticated();
    setCurrentUser(cuser);
  };
  useEffect(() => {
    checkLoggedIn();
  }, []);
  console.log(currentUser);

  return (
    <Layout title="Dashbord">
      <>
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <h2 className="text-2xl font-normal leading-normal mt-0 mb-2 text-gray-900-">
              Datos del mes
            </h2>
          </div>
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardLineChart />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardBarChart />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <h2>Número de pacientes</h2>
          </div>
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardLineChart />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardBarChart />
          </div>
        </div>
      </>
    </Layout>
  );
}
