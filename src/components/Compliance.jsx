/* eslint-disable react/prop-types */

const Compliance = ({selectedUser}) => {
  const statuses = [
    { label: (
        <>
          User name <i className="font-semibold">{selectedUser.name}</i> verified successfully
        </>
      ), count: 1 },
    { label: (<>Account name <i className="font-semibold">{selectedUser.account_information[0].value}</i> verified successfully</>), count: 1 },
    { label: (<>Phone number <i className="font-semibold">{selectedUser.mobile}</i> verified successfully</>), count: 1 },
    { label: (<>BVN <i className="font-semibold">{selectedUser.identity_verification[3].value}</i> verified successfully</>), count: 1 },
    { label: (<>Email address <i className="font-semibold">{selectedUser.email}</i> verified successfully</>), count: 1 },
    { label: (<>Customer contact <i className="font-semibold">{selectedUser.contact}</i> successfully</>), count: 1 },
    { label: (<>Business address <i className="font-semibold">{selectedUser.business_sector[3].value}</i> verified successfully</>), count: 1 },
    { label: (<>Work address <i className="font-semibold">{selectedUser.work_sector[2].value}</i> verified successfully</>), count: 1 },
    { label: (<>Home address <i className="font-semibold">{selectedUser.homeAddress}</i> verified successfully</>), count: 1 },
  ];
  return (
       <div className="p-4 bg-white rounded-lg border shadow-md">
      <ul className="space-y-2">
        {statuses.map((status, index) => (
          <li
            key={index}
            className="flex justify-between items-center gap-6 text-gray-800"
          >
            <span>{status.label}</span>
            <span>{status.count}</span>
            {/* <span className="font-semibold">{`= ${status.count}`}</span> */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Compliance