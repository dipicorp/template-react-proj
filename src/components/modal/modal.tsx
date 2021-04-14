import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import { BasePropsComponent } from '../../helper/base-props'
import { combineCN } from '../../helper/combine-classname'

interface Props extends BasePropsComponent {
  isShowing: boolean,
  onRemove?: () => void
}

const Modal: React.FC<Props> = React.memo((props) => {
  return <AnimatePresence>
    {
      props.isShowing && <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}

        className={combineCN(props.className,
          "flex flex-col fixed top-0 left-0 bottom-0 right-0 items-center justify-center")}
        style={{ ...props.style, backdropFilter: "blur(10px)", backgroundColor: "rgba(0, 0, 0, 0.9)" }}
      >
        {props.children}
      </motion.div>
    }
  </AnimatePresence>
})

export default Modal