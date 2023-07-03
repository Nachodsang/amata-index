import DropDownFilterBox from "../DropDownFilterBox/DropDownFilterBox";

export default function DropDown({
  title,
  filterList,
  checkBox,
  type,
  onChange,
  selected,
  edit
}: {
  title: string;
  filterList: any;
  checkBox: boolean;
  type: string;
  onChange: any;
  selected: any;
  edit: any
}) {
  console.log(selected)
  return (
    <div className="relative" data-te-dropdown-ref>
      <button
        className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 flex min-w-[250px] items-center justify-between whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        type="button"
        id="dropdownMenuButton1"
        data-te-dropdown-toggle-ref
        aria-expanded="false"
        data-te-ripple-init
        data-te-ripple-color="light"
      >

        {title}

        <span className="ml-2 w-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      <ul
        className="absolute z-[1000] float-left m-0 hidden w-full min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
        aria-labelledby="dropdownMenuButton1"
        data-te-dropdown-menu-ref
      >
        {type === "filterCheckbox" &&
          filterList.map((i: any, index: any) => {
            if (i?.filterType === title && i?.active === true) {
              return (
                <DropDownFilterBox
                  edit={edit}
                  selected={selected}
                  key={index}
                  filterTitle={i?.filterTitle}
                  checkBox={checkBox}
                  onChange={onChange}
                  filterType={i?.filterType}
                />
              );
            }
          })}
        {type === "dropdown" &&
          filterList.map((i: any, index: any) => (
            <DropDownFilterBox
              edit={edit}
              key={index}
              checkBox={checkBox}
              filterTitle={i}
              onChange={onChange}
            />
          ))}
      </ul>
    </div>
  );
}
