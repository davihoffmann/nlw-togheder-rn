import React, { ReactElement, ReactNode } from 'react';
import { View, Modal, ModalProps } from 'react-native';

import Background from '../Background';

import { styles } from './styles';

type Props = ModalProps & {
  children: ReactNode;
}

export default function ModalView({children, ...rest}: Props): ReactElement {
 
  return (
    <Modal 
      transparent 
      animationType="slide" 
      {...rest}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
}