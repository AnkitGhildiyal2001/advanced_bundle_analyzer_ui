import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { data } from '../Browser/Browser'
import { canBeLazy } from "../Browser/Browser";

export default function BasicTable({ dataObj, subFiles }: { dataObj: data; subFiles: string[]; }) {
  return (
    <>
      {
        subFiles.map((file) => {
          let lazy = dataObj[file].alreadyLazyLoaded, nonlazy:number|canBeLazy = dataObj[file].canBeLazyLoaded;
          let can: number = 0, already: number = 0;
          return (typeof lazy === "number" && typeof nonlazy === "object" && Object.keys(nonlazy).length>0) ?
            <div key={file}>
              <TableContainer component={Paper} sx={{ width: "95%", margin: "auto", marginBottom: 5, borderRadius: 5, overflow:'hidden' }}>
                <Table sx={{ minWidth: 65, borderRadius: 100 }} aria-label="simple table">
                  <TableHead sx={{ backgroundColor: "#1C1C1F", borderBottom: '2px solid black' }}>
                    <TableRow>
                      <TableCell sx={{ width:80, minWidth:80, color: "white", fontSize: 22 }}>
                        <span style={{color:'#34AC36', fontWeight:700}}>{lazy}</span> - <span style={{color:'#E1245E', fontWeight:700}}>{Object.keys(Object.keys(nonlazy)).length}</span>
                      </TableCell>
                      <TableCell sx={{ width:300, minWidth:300, color: "white", fontSize: 20, fontWeight:550 }} >{file.slice(file.lastIndexOf('/') + 1, file.length)}</TableCell>
                      <TableCell sx={{ color: "white", fontSize:18 }} >{file}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{fontSize:200}}>
                    {Object.keys(nonlazy).map((row : string) => {
                      if(typeof nonlazy === "number")   return <></>;
                      return (
                      <TableRow key={row} sx={{ backgroundColor: "#E1245E", borderBottom: '2px solid black' }} >
                        <TableCell component="th" scope="row" align="center" sx={{fontSize:18, fontWeight:550}}>
                          {(++can + already)}.
                        </TableCell>
                        <TableCell sx={{ borderLeft: '2px solid black', fontSize:18, fontWeight:550 }}>{row}</TableCell>
                        <TableCell sx={{ borderLeft: '2px solid black', fontSize:18, fontWeight:550, whiteSpace:'nowrap' }}>{nonlazy[row].path}</TableCell>
                      </TableRow>);
                    })}
                    {/* {lazy.map((row : row) => (
                      <TableRow key={row.name} sx={{ backgroundColor: "#34AC36", borderBottom: '2px solid black' }} >
                        <TableCell component="th" scope="row" align="center" sx={{fontSize:18, fontWeight:550}}>
                          {(++already + can)}.
                        </TableCell>
                        <TableCell sx={{ borderLeft: '2px solid black', fontSize:18, fontWeight:550 }}>{row.name}</TableCell>
                        <TableCell sx={{ borderLeft: '2px solid black', fontSize:18, fontWeight:550 }}>{row.path}</TableCell>
                      </TableRow>
                    ))} */}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          : <></>
      })
    }
    </>
  );
}