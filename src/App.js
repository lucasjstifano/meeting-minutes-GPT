import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getCalculateResults } from "./store/customerSlice";
import ResultsTable from "./components/ResultsTable";
import Layout from "./layout/Layout";
import DropZone from "./components/DropZone";
import Header from "./components/Header";
import Button from "./components/ui/Button";
import { toast } from "react-hot-toast";

const App = () => {
  const [csvData, setCsvData] = useState([]);

  const calculatedCustomerData = useSelector(
    (state) => state.calculatedCustomers.data
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCalculateResults());
  }, []);

  const handleFileLoaded = (parsedData) => {
    setCsvData(parsedData);
  };

  const saveCsv = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/customers",
        csvData
      );
      setCsvData([]);
      dispatch(getCalculateResults());
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const deleteCsvData = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/api/customers"
      );
      dispatch(getCalculateResults());
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const renderResultsTable = () => {
    if (!calculatedCustomerData || calculatedCustomerData.length === 0) {
      return null;
    }

    console.log(calculatedCustomerData);

    return <ResultsTable calculatedCustomerData={calculatedCustomerData} />;
  };

  const renderDeleteResultsButton = () => {
    if (!calculatedCustomerData || calculatedCustomerData.length === 0) {
      return null;
    }

    return (
      <Button
        onClick={() => {}}
        text="DELETE ALL DATA"
        style={`bg-gray-600 hover:bg-gray-700`}
      />
    );
  };

  return (
    <Layout>
      <Header />
      <DropZone onFileLoaded={handleFileLoaded} clearData={csvData} />
      <Button
        onClick={() => {}}
        text="SAVE CSV DATA"
        style={`bg-orange-600 hover:bg-orange-700`}
      />
      <div>{renderResultsTable()}</div>
      <div>{renderDeleteResultsButton()}</div>
    </Layout>
  );
};

export default App;
