import EditModalUser from './User/EditModalUser'
import EditProductDetails from './ShopBats/EditProductDetails'
import EditModalRepairByAdmin from './Repair/EditModalRepairByAdmin'
import ChangeShopStatus from './ShopsOrder.tsx/ChangeShopStatus'
import UpdateTicketStatusByAdmin from './Tickets/UpdateTicketStatusByAdmin'
import { EditRepairData } from './Dashboard/RepairDetails'

const AllModalList = () => {
    return (
        <>
            <EditModalUser />
            <EditProductDetails />
            <EditModalRepairByAdmin />
            <ChangeShopStatus />
            <UpdateTicketStatusByAdmin />
            <EditRepairData />
        </>
    )
}

export default AllModalList