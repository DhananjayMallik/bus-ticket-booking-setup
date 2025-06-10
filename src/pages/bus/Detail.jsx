import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Bus from '../../assets/bus9.png';
import Destination from "../../components/destination/Destination";
import Departure from "../../components/departure/Departure";
import Seat from "../../components/seat/Seat";

const Detail = () => {
  return (
    <div className="w-full lg:px-28 md:px-16 px-4 mt-[13ch] mb-[10ch] space-y-14">
      <div className="w-full grid grid-cols-2 gap-16 items-center">
        <div className="col-span-1 space-y-8">
            <img src= {Bus} alt="" className="w-full aspect-[3/2] rounded-md object-conta" />
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
                Luxury Bus
                <span className="text-base font-normal text-neu-400 dark:text-neutral-500 ml-3">
                    (Bus Number Plate)
                </span>
                </h1>
                <div className="flex items-center gap-x-2">
                <div className="flex items-center gap-x-1 text-sm text-yellow-500 dark:text-yellow-600">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                    (4.5)
                </p>
                
              </div>
              <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, iure repellendus quibusdam, quis ullam, corporis ipsam ducimus aliquam dignissimos sit iusto. Quam pariatur sit nemo quidem blanditiis incidunt dolores ipsam.
                    Molestiae cumque corrupti, nihil suscipit molestias ipsum porro eligendi necessitatibus tenetur dolore est, fugiat cupiditate explicabo et, quia unde nemo provident itaque perspiciatis dolorum? Alias commodi recusandae perspiciatis delectus optio.
                </p>
        </div>
        </div>
        <div className="col-span-1 space-y-10">
            <div className="space-y-6">
                {/* Destination Card*/}
                <Destination/>
                {/* Departure Card*/}
                <Departure/>
            </div>
            {/* seat selection*/}
            <Seat/>
            {/* checkout button*/}
            <div className="flex">
                <Link to={'/bus/bus-details/checkout'}
                className="w-fit bg-violet-700 text-neutral-50 font-medium text-base px-6 py-2 rounded-md hover:bg-violet-700 ease-in-out duration-300">
                Processed To Checkout
                </Link>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Detail
