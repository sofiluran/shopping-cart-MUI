import Box from '@mui/material/Box';

const Header = () => {
  return (
    <Box sx={{
      textAlign: "center",
      py: 3,
      px: 2,
      borderRadius: 2,
      color: "white",
      border: '1px solid white',
      mb: 4
    }}>
      <h1>SHOPPING LIST</h1>
    </Box>
  )
}

export default Header