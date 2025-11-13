
import "bootstrap/dist/css/bootstrap.min.css";
export default function BookDriveForm() {
  return (
    <div class="container p-5 my-5">
      <h2 class="text-center fw-bold mb-4">Book Your Drive</h2>
      <p class="text-center text-muted mb-5">
        Plan your journey with ease — fill out the form below to book your personalized drive.
      </p>

      <form class="row g-3 shadow  p-4 rounded bg-light">
        <div class="col-md-6">
          <label for="name" class="form-label">Full Name</label>
          <input type="text" class="form-control" id="name" placeholder="Enter your full name" required />
        </div>

        <div class="col-md-6">
          <label for="email" class="form-label">Email Address</label>
          <input type="email" class="form-control" id="email" placeholder="Enter your email" required />
        </div>

        <div class="col-md-6">
          <label for="phone" class="form-label">Phone Number</label>
          <input type="tel" class="form-control" id="phone" placeholder="Enter your phone number" required />
        </div>

        <div class="col-md-6">
          <label for="destination" class="form-label">Destination</label>
          <select id="destination" class="form-select" required>
            <option selected disabled>Select destination</option>
            <option>Goa</option>
            <option>Kerala</option>
            <option>Bangalore</option>
            <option>Ooty</option>
            <option>Manali</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="date" class="form-label">Travel Date</label>
          <input type="date" class="form-control" id="date" required />
        </div>
        <div class="col-md-6">
          <label for="days" class="form-label">Number of Days</label>
          <input type="number" class="form-control" id="days" placeholder="e.g. 5" min="1" required />
        </div>

        <div class="col-md-12">
          <label for="requests" class="form-label">Special Requests</label>
          <textarea class="form-control" id="requests" rows="3" placeholder="Any specific preferences or notes"></textarea>
        </div>

        <div class="col-12 text-center mt-3">
          <button type="submit" class="btn btn-primary px-5 py-2">Book Now</button>
        </div>
      </form>
    </div>
  );
}
