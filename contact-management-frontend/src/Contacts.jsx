import { useEffect, useState, useCallback } from "react";

export default function Contacts() {
  // State for creating a new contact
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [address, setAddress] = useState("");

  // State for contacts list and messages
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [editId, setEditId] = useState(-1);

  // State for editing a contact
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editphoneNumber, setEditphoneNumber] = useState("");
  const [editAddress, setEditAddress] = useState("");

  // State for fetching a single contact by ID
  const [searchId, setSearchId] = useState("");
  const [searchedContact, setSearchedContact] = useState(null);
  const [searchError, setSearchError] = useState("");

  const apiUrl = process.env.REACT_APP_BACKEND_URL;
  console.log("API URL:", apiUrl);

  // Create a new contact (includes phoneNumber and address)
  const handleSubmit = () => {
    setError("");

    // Validate required fields: name, email, and phoneNumber are mandatory
    if (name.trim() !== "" && email.trim() !== "" && phoneNumber.trim() !== "") {
      fetch(apiUrl + "/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phoneNumber, address }),
      })
        .then((res) => {
          if (res.ok) {
            // In a real application, the backend would return the created contact (with an _id)
            setContacts([...contacts, { name, email, phoneNumber, address, _id: Date.now() }]);
            setName("");
            setEmail("");
            setphoneNumber("");
            setAddress("");
            setMessage("Contact added successfully");
            setTimeout(() => setMessage(""), 3000);
          } else {
            setError("Unable to create contact");
          }
        })
        .catch((er) => setError("Unable to create contact"+ er));
    } else {
      setError("Please fill in Name, Email, and phoneNumber");
    }
  };

  // Fetch all contacts
  const getContacts = useCallback(() => {
    if (!apiUrl) {
      console.error("API URL is undefined.");
      return;
    }

    fetch(apiUrl + "/contacts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch contacts");
        }
        return res.json();
      })
      .then((data) => setContacts(Array.isArray(data) ? data : []))
      .catch(() => setError("Failed to fetch contacts"));
  }, [apiUrl]);

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  // Set state for editing: pre-populate fields with the contact's current data
  const handleEdit = (contact) => {
    setEditId(contact._id);
    setEditName(contact.name);
    setEditEmail(contact.email);
    setEditphoneNumber(contact.phoneNumber);
    setEditAddress(contact.address);
  };

  // Update an existing contact by ID (ensuring phoneNumber and address are updated)
  const handleUpdate = () => {
    setError("");

    if (
      (editName?.trim() || "") !== "" &&
      (editEmail?.trim() || "") !== "" &&
      (editphoneNumber?.trim() || "") !== "" &&
      (editAddress?.trim() || "") !== ""
    ) {
      fetch(apiUrl + "/contacts/" + editId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: editName,
          email: editEmail,
          phoneNumber: editphoneNumber,
          address: editAddress,
        }),
      })
        .then((res) => {
          if (res.ok) {
            const updatedContacts = contacts.map((contact) =>
              contact._id === editId
                ? { ...contact, name: editName, email: editEmail, phoneNumber: editphoneNumber, address: editAddress }
                : contact
            );
            setContacts(updatedContacts);
            setEditId(-1);
            setEditName("");
            setEditEmail("");
            setEditphoneNumber("");
            setEditAddress("");
            setMessage("Contact updated successfully");
            setTimeout(() => setMessage(""), 3000);
          } else {
            setError("Unable to update contact");
          }
        })
        .catch(() => setError("Unable to update contact"));
    } else {
      setError("Please fill in all fields before updating");
    }
  };

  const handleEditCancel = () => {
    setEditId(-1);
  };

  // Delete a contact by ID
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      fetch(apiUrl + "/contacts/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            setContacts(contacts.filter((contact) => contact._id !== id));
          } else {
            setError("Failed to delete contact");
          }
        })
        .catch(() => setError("Failed to delete contact"));
    }
  };

  // Fetch a single contact by ID
  const handleSearch = () => {
    setSearchError("");
    setSearchedContact(null);

    if (searchId.trim() === "") {
      setSearchError("Please enter a contact ID");
      return;
    }

    fetch(apiUrl + "/contacts/" + searchId)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Contact not found");
        }
      })
      .then((data) => {
        setSearchedContact(data);
      })
      .catch(() => setSearchError("Contact not found"));
  };

  return (
    <>
      <div className="row p-3 bg-primary text-light text-center">
        <h1>Contact Management System</h1>
      </div>
      <div className="container">
        {/* Create New Contact Section */}
        <div className="row mt-3">
          <h3>Create New Contact</h3>
          {message && <p className="text-success">{message}</p>}
          <div className="form-group d-flex gap-2">
            <input
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="form-control"
              type="text"
            />
            <input
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="form-control"
              type="email"
            />
            <input
              placeholder="phoneNumber"
              onChange={(e) => setphoneNumber(e.target.value)}
              value={phoneNumber}
              className="form-control"
              type="text"
            />
            <input
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              className="form-control"
              type="text"
            />
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          {error && <p className="text-danger mt-3">{error}</p>}
        </div>

        {/* Search Single Contact Section */}
        <div className="row mt-3">
          <h3>Search Contact by ID</h3>
          <div className="form-group d-flex gap-2">
            <input
              placeholder="Contact ID"
              onChange={(e) => setSearchId(e.target.value)}
              value={searchId}
              className="form-control"
              type="text"
            />
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
          {searchError && <p className="text-danger">{searchError}</p>}
          {searchedContact && (
            <div className="mt-2">
              <h4>Contact Details</h4>
              <p>
                <strong>Name:</strong> {searchedContact.name}
              </p>
              <p>
                <strong>Email:</strong> {searchedContact.email}
              </p>
              <p>
                <strong>phoneNumber:</strong> {searchedContact.phoneNumber}
              </p>
              <p>
                <strong>Address:</strong> {searchedContact.address}
              </p>
            </div>
          )}
        </div>

        {/* All Contacts Section */}
        <div className="row mt-3">
          <h3>All Contacts</h3>
          <div className="col-md-8">
            <ul className="list-group">
              {contacts.map((contact) => (
                <li
                  key={contact._id}
                  className="list-group-item bg-light d-flex justify-content-between align-items-center my-2"
                >
                  <div className="d-flex flex-column me-2">
                    {editId !== -1 && editId === contact._id ? (
                      <div className="form-group d-flex gap-2">
                        <input
                          placeholder="Name"
                          onChange={(e) => setEditName(e.target.value)}
                          value={editName}
                          className="form-control"
                          type="text"
                        />
                        <input
                          placeholder="Email"
                          onChange={(e) => setEditEmail(e.target.value)}
                          value={editEmail}
                          className="form-control"
                          type="email"
                        />
                        <input
                          placeholder="phoneNumber"
                          onChange={(e) => setEditphoneNumber(e.target.value)}
                          value={editphoneNumber}
                          className="form-control"
                          type="text"
                        />
                        <input
                          placeholder="Address"
                          onChange={(e) => setEditAddress(e.target.value)}
                          value={editAddress}
                          className="form-control"
                          type="text"
                        />
                      </div>
                    ) : (
                      <>
                        <span className="fw-bold">{contact.name}</span>
                        <span>{contact.email}</span>
                        <span>{contact.phoneNumber}</span>
                        <span>{contact.address}</span>
                      </>
                    )}
                  </div>
                  <div className="d-flex gap-2">
                    {editId === -1 ? (
                      <button
                        className="btn btn-warning"
                        onClick={() => handleEdit(contact)}
                      >
                        Edit
                      </button>
                    ) : (
                      <button className="btn btn-warning" onClick={handleUpdate}>
                        Update
                      </button>
                    )}
                    {editId === -1 ? (
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(contact._id)}
                      >
                        Delete
                      </button>
                    ) : (
                      <button className="btn btn-danger" onClick={handleEditCancel}>
                        Cancel
                      </button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
