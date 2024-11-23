import { Grid,Skeleton } from '@mui/material';
export const Loaders = () => {
 
  return (
    <Grid container height={"calc(100vh - 4rem)" } spacing={"1rem"}>
    <Grid item  sm={4} md={3}  sx={{ display: { xs: 'none', sm: 'block' } }} height={"100%"} bgcolor="primary.main">
    <Skeleton variant='rectangular' height={"100vh"}/>
        {/* Content for the first column */}
    </Grid>
    <Grid item xs={12 } sm={8} md={5} lg={6} height={"100%"} >
        {/* Content for the second column */}
        {
          Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} variant='rectangular' height={"5rem"}/>
          ))
        }

    </Grid>
    <Grid item md={4} lg={3} height={"100%"}  sx={{ display: { xs: 'none', md: 'block' },  }}
    

    >
      
      <Skeleton variant='rectangular' height={"100vh"}/>
    </Grid>
   
</Grid>
  );
};
