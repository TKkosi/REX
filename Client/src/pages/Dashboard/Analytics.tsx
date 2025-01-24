
const Analytics = () => {
  return (
    <div>Analytics
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Total Mentions</h5>
                        <p className="card-text">3,452</p>
                        <p className="text-success">+12% since last week</p>
                    </div>

                    <div className="card-footer">
                        <small className="text-muted">Updated 3 mins ago</small>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Engagement Rate</h5>
                        <p className="card-text">7.4%</p>
                        <p className="text-success">+8% since last week</p>
                    </div>

                    <div className="card-footer">
                        <small className="text-muted">Updated 3 mins ago</small>
                    </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Analytics