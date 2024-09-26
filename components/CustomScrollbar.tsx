'use client'

import { Scrollbars } from 'react-custom-scrollbars-2'

const CustomScrollbar = ({ children }: { children: React.ReactNode }) => (
  <Scrollbars style={{ width: '100%', height: '100vh' }} autoHide>
    {children}
  </Scrollbars>
)

export default CustomScrollbar