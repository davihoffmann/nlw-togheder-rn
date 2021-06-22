import React, { ReactElement } from 'react';
import { ScrollView } from 'react-native';
import Category from '../Category';

import { categories } from '../../utils/categories';
import { styles } from './styles'

type Props = {
  categorySelected: string;
  selectCategory: (categoryId: string) => void;
}

export default function CategorySelect({ categorySelected, selectCategory }: Props): ReactElement {
  return (
    <ScrollView 
      style={styles.container} 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={{paddingRight: 40}}
    >
      {
        categories.map(category => (
          <Category 
            key={category.id} 
            title={category.title} 
            icon={category.icon}
            checked={category.id === categorySelected}
            onPress={() => selectCategory(category.id)}
          />
        ))
      }
    </ScrollView>
  );
}