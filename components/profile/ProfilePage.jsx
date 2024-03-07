import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ProfilePage = () => {
  const [userName, setUserName] = useState('shachithra Anuranga');
  const [email, setEmail] = useState('sachithra9999@gmail.com');
  const [password, setPassword] = useState('*********');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [editingPassword, setEditingPassword] = useState(false);

  const handleSave = () => {
    // Save the updated values
    console.log('User Name:', userName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Clear the confirm password field and hide it
    setConfirmPassword('');
    setPasswordError('');
    setShowPassword(false);
    setEditingPassword(false);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    if (confirmPassword && value !== confirmPassword) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    if (password && value !== password) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>User name</Text>
        <TextInput
          style={styles.input}
          value={userName}
          onChangeText={setUserName}
          editable={true}
          placeholder="Enter your user name"
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          editable={true}
          placeholder="Enter your email"
        />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={handlePasswordChange}
          editable={true}
          secureTextEntry={!showPassword}
          placeholder="Enter your password"
        />
        {editingPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text>{showPassword ? 'Hide' : 'Show'} Password</Text>
          </TouchableOpacity>
        )}
      </View>
      {editingPassword && (
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={handleConfirmPasswordChange}
            editable={true}
            secureTextEntry={!showPassword}
            placeholder="Confirm your password"
          />
          {passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
        </View>
      )}
      {editingPassword && (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      )}
      {!editingPassword && (
        <TouchableOpacity style={styles.editButton} onPress={() => setEditingPassword(true)}>
          <Text style={styles.editButtonText}>Password Reset</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  editButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProfilePage;
