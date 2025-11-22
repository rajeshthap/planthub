import React, { useState, useEffect } from "react";
import {
  Badge,
  Button,
  Container,
  Row,
 
} from "react-bootstrap";


import "../../assets/css/LeftNav.css";

import { useNavigate } from "react-router-dom";
import LeftNav from "./LeftNav";
import HeaderTop from "./HeaderTop";
import { AiFillEdit } from "react-icons/ai";



const InnerDashBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile,] = useState(false);
  const [isTablet,] = useState(false);
  const navigate = useNavigate();


   const [donationData, setDonationData] = useState([]);
    const [loading, setLoading] = useState(true);
  
 
  
   
    const apiUrl =
      "https://mahadevaaya.com/youthforhimalayastrust.org/yfhtrust/backend/api/donation/";
  
    const currentPage = 1;
    const itemsPerPage = 10;
  
    // Fetch Donations
    useEffect(() => {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          const normalized = Array.isArray(data) ? data : [data];
          setDonationData(normalized);
        })
        .catch((err) => console.error("Donation API Error:", err))
        .finally(() => setLoading(false));
    }, []);
  
    const paginatedEmployees = donationData.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  
    const handleViewSalary = (emp) => {
      navigate("/salary-view", { state: emp });
    };
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <LeftNav
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isMobile={isMobile}
        isTablet={isTablet}
      />

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
      
        <HeaderTop toggleSidebar={toggleSidebar} />


        {/* Dashboard Body */}
        <Container fluid className="dashboard-body">
         <div className="br-box-container">

            <Row className="mt-3">
              <div className="col-md-12">
               <table className="temp-rwd-table">
  <tbody className="pt-table-th">
    <tr>
      <th>S.No</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Amount</th>
      <th>Status</th>
      <th>Action</th>
    </tr>

    {loading ? (
      <tr>
        <td colSpan="10" className="text-center">Loading...</td>
      </tr>
    ) : paginatedEmployees.length > 0 ? (
      paginatedEmployees.map((emp, index) => (
        <tr key={index}>
          <td data-th="S.No">
            {(currentPage - 1) * itemsPerPage + index + 1}
          </td>

          <td data-th="Name">
            {emp.name || "N/A"}
          </td>

          <td data-th="Email">
            {emp.email || "N/A"}
          </td>

          <td data-th="Phone">
            {emp.phone || "N/A"}
          </td>

          <td data-th="Amount">
            ₹ {emp.amount || "0"}
          </td>

          <td data-th="Status">
            <Badge bg="success">Paid</Badge>
          </td>

          <td data-th="Action">
            <Button
              variant="primary" className="pt-donate-view"
              size="sm"
              onClick={() => handleViewSalary(emp)}
            >
              <AiFillEdit /> View
            </Button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="10" className="text-center">
          No donations found.
        </td>
      </tr>
    )}

  </tbody>
</table>

              </div>
            </Row>
         </div>

          {/* Existing Table + Quick Actions (same layout) */}
        </Container>
      </div>
    </div>
  );
};

export default InnerDashBoard;
