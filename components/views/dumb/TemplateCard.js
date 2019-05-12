import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { GoRepoForked, GoCloudUpload } from 'react-icons/go'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '15px',
    height: '275px',
    width: '200px',
    margin: [5, 10],
    boxShadow: theme.shadows[1],
    borderRadius: '3px',
    boxSizing: 'border-box'
  },
  templateField: {
    display: 'flex',
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    overflow: 'hidden'
  },
  fieldName: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 12,
    color: 'grey'
  },
  fieldData: {
    margin: 0,
    fontSize: 12
  },
  templateActions: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > span': {
      cursor: 'pointer'
    }
  }
})

const TemplateCard = ({ classes, template, fileDescriptor, meta }) => {

  function handleTemplateFork () {
    // setMode to publish
    // set publishTemplate to active template
    // merge template with fileDescriptor
    // decrypt file descriptor
  }

  function handleRecordPublish () {

  }

  return <div className={classes.root}>
    <div className={classes.templateField}>
      <span className={classes.fieldName}>
        Friendly Name
      </span>
      <p className={classes.fieldData}>{template.friendly_name}</p>
    </div>

    <div className={classes.templateField}>
      <span className={classes.fieldName}>
        Name
      </span>
      <p className={classes.fieldData}>{template.name}</p>
    </div>

    <div className={classes.templateField}>
      <span className={classes.fieldName}>
        Identifier
      </span>
      <p className={classes.fieldData}>{template.identifier}</p>
    </div>

    <div className={classes.templateField}>
      <span className={classes.fieldName}>
        Description
      </span>
      <p className={classes.fieldData}>{template.description}</p>
    </div>

    <div className={classes.templateActions}>
      <span onClick={handleTemplateFork}><GoRepoForked /></span>
      <span onClick={handleRecordPublish}><GoCloudUpload /></span>
    </div>
  </div>
}

TemplateCard.propTypes = {
  classes: PropTypes.object.isRequired,
  template: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  fileDescriptor: PropTypes.string.isRequired
}

export default withStyles(styles)(TemplateCard)
