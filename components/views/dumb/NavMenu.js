import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import SideBarNavLink from './SideBarNavLink'

const styles = theme => ({
  root: {},
  tableOfContents: {
    display: 'flex',
    flexDirection: 'column'
  },
  [`@media (max-width: ${theme.breakpoints['md']}px)`]: {
    root: {
      display: 'none'
    }
  }
})

const NavMenu = ({
  classes,
  pages,
  activePage,
  setActivePage
}) => {
  return <div className={classes.root}>
    <nav className={classes.tableOfContents}>
      {pages.map((page, i) => {
        return <SideBarNavLink
          page={page}
          key={i}
          setActivePage={setActivePage}
          activePage={activePage}
        />
      })}
    </nav>
  </div>
}

NavMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  activePage: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired
}

export default withStyles(styles, { injectTheme: true })(NavMenu)
