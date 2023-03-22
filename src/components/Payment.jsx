import React from 'react'

const Payment = () => {
  return (
<div className='bg-main pt-5 p-md-0'
  style={{
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  }}
>
  <div className='p-3 mx-auto text-form' style={{ maxWidth: "800px" }}>
    <div className='pb-5 mt-5'>
      <h1>Make Your Transaction</h1>
    </div>
    <form>
      <div className="mb-3">
        <label htmlFor="walletAddress" className="form-label">
          Sender Wallet Address
        </label>
        <input
          type="text"
          className="form-control"
          id="walletAddress"
          placeholder="Enter wallet address"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="walletAddress" className="form-label">
          Receiver Wallet Address
        </label>
        <input
          type="text"
          className="form-control"
          id="walletAddress"
          placeholder="Enter wallet address"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          type="text"
          className="form-control"
          id="amount"
          placeholder="Enter amount"
        />
      </div>
      <div className="mb-3">
      <div class="dropdown">
  <a class="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select Token
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
      </div>
      <button type="submit" className="btn btn-success">
        Submit
      </button>
    </form>
  </div>
</div>







  )
}

export default Payment