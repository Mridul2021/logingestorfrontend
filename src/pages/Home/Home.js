import React, { useEffect, useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  Button,
  Container,
  TextField,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import Tables from "../../components/Tables/Tables";
import { exporttocsvfunc, logsgetfunc } from "../../services/Apis";

const Home = () => {
  const [logsData, setLogsData] = useState([]);
  const [showspin, setShowSpin] = useState(true);

  // for searching
  const [search_level, setSearch_level] = useState("");
  const [search_message, setSearch_message] = useState("");
  const [search_resourceId, setSearch_resourceId] = useState("");
  const [search_traceId, setSearch_traceId] = useState("");
  const [search_spanId, setSearch_spanId] = useState("");
  const [search_commit, setSearch_commit] = useState("");
  const [searctmetametadata_parentResourceId, setSearch_metametadata_parentResourceId] = useState("");
  const [search_timestamp, setSearch_timestamp] = useState("");
  const [page,setPage] = useState(1);
  const [pageCount,setPageCount] = useState(0);

  //Search handle functions
  const handlesearch_level = (value) => {
    setSearch_level(value);
  };
  const handlesearch_message = (value) => {
    setSearch_message(value);
  };
  const handlesearch_resourceId = (value) => {
    setSearch_resourceId(value);
  };
  const handlesearch_timestamp = (value) => {
    setSearch_timestamp(value);
  };
  const handlesearch_traceId = (value) => {
    setSearch_traceId(value);
  };
  const handlesearch_spanId = (value) => {
    setSearch_spanId(value);
  };
  const handlesearch_commit = (value) => {
    setSearch_commit(value);
  };
  const handlesearch_metadata_parentResourceId = (value) => {
    setSearch_metametadata_parentResourceId(value);
  };

  //For the sort Dropdown
  const [sort, setsort] = React.useState('new');

  const handleChange = (event) => {
    setsort(event.target.value);
  };

  const handlePrevious = ()=>{
    setPage(()=>{
      if(page === 1) return page;
      return page - 1
    })
  }

  // handle next btn
  const handleNext = ()=>{
    setPage(()=>{
      if(page === pageCount) return page;
      return page + 1
    })
  }
  const logsGet = async () => {
    try {
      const response = await logsgetfunc(search_level,search_message,search_resourceId,search_timestamp,search_traceId,search_spanId,search_commit,searctmetametadata_parentResourceId,sort,page);
      // console.log(response);
      if (response.status === 200) {
        setLogsData(response.data.userdata);
        setShowSpin(false);
        setPageCount(response.data.Pagination.pageCount);
        // console.log(response.data.Pagination.pageCount);
      } else {
        console.error("Error fetching logs data");
      }
    } catch (error) {
      console.error("Error in logsGet:", error);
    }
  };
  useEffect(() => {
    logsGet();
  }, [search_level,search_message,search_resourceId,search_timestamp,search_traceId,search_spanId,search_commit,searctmetametadata_parentResourceId, sort,page]);


  //export log
  const exportlogs=async()=>{
    const response=await exporttocsvfunc();
    if(response.status === 200){
      window.open(response.data.downloadUrl,"blank")
    }else{
      alert("alert!");
    }

  }
  

  return (
    <div>
      <Container>
        <Grid container sx={{ marginTop: "100px" }}>
          <Grid item xs={12}>
          <Grid container spacing={2}>
          <Grid item xs={6} sm={6}>
            <TextField
              label="search_level"
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => handlesearch_level(e.target.value)}
              fullWidth
              sx={{ width: "100%", height: "40px", paddingBottom: "20px" }}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              label="search_ message"
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => handlesearch_message(e.target.value)}
              fullWidth
              sx={{ width: "100%", height: "40px", paddingBottom: "20px" }}
            />
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField
              label="search_ resourceID"
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => handlesearch_resourceId(e.target.value)}
              fullWidth
              sx={{ width: "100%", height: "40px", paddingBottom: "20px" }}
            />
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField
              label="search_ timestamp"
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => handlesearch_timestamp(e.target.value)}
              fullWidth
              sx={{ width: "100%", height: "40px", paddingBottom: "20px" }}
            />
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField
              label="search_ traceId"
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => handlesearch_traceId(e.target.value)}
              fullWidth
              sx={{ width: "100%", height: "40px", paddingBottom: "20px" }}
            />
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField
              label="search_ spanId"
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => handlesearch_spanId(e.target.value)}
              fullWidth
              sx={{ width: "100%", height: "40px", paddingBottom: "20px" }}
            />
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField
              label="search_ commit"
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => handlesearch_commit(e.target.value)}
              fullWidth
              sx={{ width: "100%", height: "40px", paddingBottom: "20px" }}
            />
            </Grid>
            <Grid item xs={6} sm={6}>
            <TextField
              label="search_metadata.parentResourceId"
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => handlesearch_metadata_parentResourceId(e.target.value)}
              fullWidth
              sx={{ width: "100%", height: "40px", paddingBottom: "20px" }}
            />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2}>
          </Grid>

        </Grid>
        </Grid>
        <Grid container sx={{ marginTop: "7vh" }}>
          <Grid item xs={5}>

          </Grid>

        </Grid>
      </Container>
      <Grid container>
      <Grid item xs={6}>
      <Button
        variant="contained"
        size="medium"
        onClick={exportlogs}
        sx={{
          textTransform:'none',
          borderRadius: 20,
          color: 'white',
          backgroundColor: 'green',
          marginRight: '50px',
          marginLeft:'25vw'
        }}
        >
              Export to CSV
        </Button>
      </Grid>
      <Grid item xs={6}>
      <FormControl style={{marginLeft:'20vw'}} sx={{ minWidth: 120 }} size="small">
      <InputLabel id="demo-sort-dropdown-label">Sort Order</InputLabel>
      <Select
        labelId="demo-sort-dropdown-label"
        id="demo-sort-dropdown"
        value={sort}
        label="Sort Order"
        onChange={handleChange}
      >
        <MenuItem onClick={()=>setsort("new")} value="new">new</MenuItem>
        <MenuItem onClick={()=>setsort("old")} value="old">old</MenuItem>
      </Select>
    </FormControl>
    </Grid>
    </Grid>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1vh" }}>
        {showspin ? <CircularProgress color="secondary" /> : <Tables logsData={logsData} handlePrevious={handlePrevious} handleNext={handleNext} page={page} pageCount={pageCount} setPage={setPage}/>}
      </div>
      
    </div>
  );
};

export default Home;
