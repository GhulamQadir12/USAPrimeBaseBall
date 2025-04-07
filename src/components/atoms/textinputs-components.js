import React, { useState, useRef } from 'react';
import {
  I18nManager,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import DropdownModal from 'components/molecules/modals/dropdown-modal';
import PaymentMethodModal from 'components/molecules/modals/payment-method-modal';
import DropdownModalState from 'components/molecules/modals/dropdown-modal-state';
import DropdownModalCustomer from 'components/molecules/modals/dropdown-modal-customer';
import DropdownModalPaymentmethod from 'components/molecules/modals/dropdown-modal-payment_method';
import DropdownModalAccount from 'components/molecules/modals/dropdown-modal-account-name';
import DropdownModalCardType from 'components/molecules/modals/dropdown-modal-card_type';
import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import { useAppSelector } from 'hooks/use-store';
import { t } from 'i18next';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import { Row } from '../row';

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
  },
  PasswordIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  errorLabel: {
    color: colors.red,
    fontSize: 12,
    marginTop: 5,
  },
  labelStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropDownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
  },
  areaContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
  },
  areatextInput: {
    padding: 10,
    textAlignVertical: 'top',
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const InputPrescription = ({
  isRequired = false,
  onChangeText,
  value,
  style,
  label,
  placeholder = 'type here',
  labelStyle,
  containerStyle,
  errorStyle,
  secureTextEntry,
  isPassword,
  keyboardType,
  error,
  editable = true,
  onBlur = () => {},
  onPressIn = () => {},
  onPressMinus = () => {},
}) => {
  const [secure, setSecure] = useState(true);

  return (
    <>
      <Row style={{ alignItems: 'center' }}>
        <Regular label={label} style={[styles.labelStyle, labelStyle]} />
        <TouchableOpacity onPress={onPressMinus}>
          <AntDesign name="minuscircle" color={colors.primary} size={mvs(14)} />
        </TouchableOpacity>
      </Row>
      <View style={[styles.Container, containerStyle]}>
        <TextInput
          editable={editable}
          onBlur={onBlur}
          onPressIn={onPressIn}
          keyboardType={keyboardType}
          secureTextEntry={isPassword && secure}
          value={value}
          placeholderTextColor={colors.lightGray}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[
            styles.textInput,
            style,
            { textAlign: I18nManager.isRTL ? 'right' : 'left' },
          ]}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.PasswordIcon}
            onPress={() => setSecure(!secure)}
          >
            <Feather
              size={25}
              name={secure ? 'eye-off' : 'eye'}
              color={colors.black}
            />
          </TouchableOpacity>
        )}
      </View>
      <Regular
        label={error ? error : ''}
        style={[styles.errorLabel, errorStyle]}
      />
    </>
  );
};

const PrimaryInput = ({
  onChangeText,
  value,
  style,
  label,
  placeholder = 'type here',
  labelStyle,
  containerStyle,
  errorStyle,
  secureTextEntry,
  isPassword,
  multiline,
  isCalendar,
  keyboardType,
  error,
  mainContainer,
  editable = true,
  onBlur = () => {},
  onPressIn = () => {},
  isRequired = false,
}) => {
  const [secure, setSecure] = useState(true);

  return (
    <View style={[mainContainer]}>
      {label && (
        <Regular label={label} style={[styles.labelStyle, labelStyle]}>
          {isRequired ? <Regular color={colors.red} label={' *'} /> : null}
        </Regular>
      )}
      <View style={[styles.Container, containerStyle]}>
        <TextInput
          multiline={multiline}
          editable={editable}
          onBlur={onBlur}
          onPressIn={onPressIn}
          keyboardType={keyboardType}
          secureTextEntry={isPassword && secure}
          value={value}
          placeholderTextColor={colors.placeholder}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[
            styles.textInput,
            style,
            { textAlign: I18nManager.isRTL ? 'right' : 'left' },
          ]}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.PasswordIcon}
            onPress={() => setSecure(!secure)}
          >
            <Feather
              size={25}
              name={secure ? 'eye' : 'eye-off'}
              color={colors.black}
            />
          </TouchableOpacity>
        )}
        {isCalendar && (
          <TouchableOpacity
            style={styles.PasswordIcon}
          >
            <FontAwesome size={20} name={'calendar'} color={colors.primary} />
          </TouchableOpacity>
        )}
      </View>
      <Regular
        label={error ? error : ''}
        style={[styles.errorLabel, errorStyle]}
      />
    </View>
  );
};

const PrimaryInputNote = ({
  onChangeText,
  value,
  style,
  label,
  placeholder = 'type here',
  labelStyle,
  containerStyle,
  numberOfLines,
  errorStyle,
  secureTextEntry,
  isPassword,
  isCalendar,
  keyboardType,
  styleInput,
  error,
  Mainstyle,
  mainContainer,
  editable = true,
  onBlur = () => {},
  onPressIn = () => {},
  isRequired = false,
}) => {
  const [secure, setSecure] = useState(true);

  return (
    <View style={{ width: '45%', ...Mainstyle }}>
      {label && (
        <Regular label={label} style={[styles.labelStyle, labelStyle]}>
          {isRequired ? <Regular color={colors.red} label={' *'} /> : null}
        </Regular>
      )}
      <View style={[styles.Container, containerStyle]}>
        <TextInput
          editable={editable}
          onBlur={onBlur}
          onPressIn={onPressIn}
          keyboardType={keyboardType}
          secureTextEntry={isPassword && secure}
          value={value}
          placeholderTextColor={colors.placeholder}
          onChangeText={onChangeText}
          placeholder={placeholder}
          numberOfLines={numberOfLines}
          style={[
            styles.textInput,
            styleInput,
            { textAlign: I18nManager.isRTL ? 'right' : 'left' },
          ]}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.PasswordIcon}
            onPress={() => setSecure(!secure)}
          >
            <Feather
              size={25}
              name={secure ? 'eye' : 'eye-off'}
              color={colors.black}
            />
          </TouchableOpacity>
        )}
        {isCalendar && (
          <TouchableOpacity
            style={styles.PasswordIcon}
          >
            <FontAwesome size={20} name={'calendar'} color={colors.primary} />
          </TouchableOpacity>
        )}
      </View>
      <Regular
        label={error ? error : ''}
        style={[styles.errorLabel, errorStyle]}
      />
    </View>
  );
};


