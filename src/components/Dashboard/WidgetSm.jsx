import UserWegetSm from "./UserWidgetSm";

export default function WidgetSm({users,movies}) {
  return (
  <div className="md:p-4 my-4">
      <div className="box p-4 ">
        <div className="capitalize pb-2 text-lg font-semibold "> new join members</div>
        {users?.map(user=>(
          <UserWegetSm key={user._id} user={user}/>
        ))
        }

      </div>
  </div>
  );
}
