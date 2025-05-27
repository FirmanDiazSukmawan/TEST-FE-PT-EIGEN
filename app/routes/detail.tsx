import type { Route } from './+types/detail';
import DetailPage from '~/pages/detail/detailPage';

export function meta({ params }: Route.MetaArgs) {
  
  // console.log(params.slug)
  return [
    { title: `Detail ${params.slug}` },
    {
      name: "description",
      content: "Edit or delete an item using our Supabase CRUD app.",
    },
  ];
}

const Detail = () => {
  return (
   <DetailPage/>
  )
}

export default Detail