'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  //actualizar la url para poder buscar elementos desde la url.
  const searchsParams = useSearchParams();
  // esto para poder obtener el path donde estoy 
  const pathname = usePathname();
  // esto para poder reeplanzar los searchparams 
  const {replace} = useRouter();

  const handelSearch = (term:string)=>{
    //obtengo la data de los parametros de la url para poder actualizar la url
    const params = new URLSearchParams(searchsParams)
    if(term){
      params.set('query',term)
    }else{
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }
  
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        defaultValue={searchsParams.get('query')?.toString()}
        onChange={(e)=>handelSearch(e.target.value)}
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
